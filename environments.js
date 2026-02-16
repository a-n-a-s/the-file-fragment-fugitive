module.exports = {
  development: {
    host: 'localhost',
    port: 3000,
    debug: true,
    logging: 'verbose'
  },
  staging: {
    host: 'staging.example.com',
    port: 443,
    debug: false,
    logging: 'info'
  },
  production: {
    host: 'api.example.com',
    port: 443,
    debug: false,
    logging: 'error'
  }
};
