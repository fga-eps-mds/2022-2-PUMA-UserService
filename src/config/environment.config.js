require('dotenv').config();

module.exports = {
  configEnv: () => {
    if (process.env.ENVIRONMENT === 'dev') {
      global.URL_API = `http://${process.env.IP_ADDRESS}:3004`;
      global.SECRET = process.env.SECRET;
      global.DB_URL = process.env.DB_URL;
    } else if (process.env.ENVIRONMENT === 'test') {
      global.URL_API = `http://${process.env.IP_ADDRESS}:3004`;
      global.SECRET = process.env.SECRET;
      global.DB_URL = process.env.DB_URL_TEST;
    } else if (process.env.ENVIRONMENT === 'hom') {
      global.URL_API = `http://${process.env.IP_ADDRESS}:${process.env.PORT}`;
      global.SECRET = process.env.SECRET;
      global.DB_URL = process.env.DB_URL;
    } else if (process.env.ENVIRONMENT === 'prod') {
      global.URL_API = `http://${process.env.IP_ADDRESS}:3004`;
      global.SECRET = process.env.SECRET_PROD;
      global.DB_URL = process.env.DB_URL;
    } else if (process.env.ENVIRONMENT === 'service-dev') {
      global.URL_API = `http://${process.env.IP_ADDRESS}:3004`;
      global.SECRET = process.env.SECRET;
      global.DB_URL = process.env.DB_URL_DEV;
    }
  },
};
