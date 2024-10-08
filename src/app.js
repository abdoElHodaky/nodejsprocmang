const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const multer = require('multer');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const routes = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const fileupload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swagger');
const { SwaggerTheme, SwaggerThemeNameEnum } = require('swagger-themes');
const theme = new SwaggerTheme();

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition,{
  explorer:false,
  customCss:theme.getBuffer(SwaggerThemeNameEnum.FLATTOP),
  
}));

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));
app.use(express.static('./tmp'))

app.use(
  fileupload({
      useTempFiles: true,
      tempFileDir: '/tmp/',
  })
)

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// v1 api routes
app.use('/v1/', routes);
app.get("/",(req,res)=>{
  res.redirect("docs")
})
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);
module.exports = app;
