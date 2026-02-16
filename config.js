module.exports = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME || 'fragments'
  },
  server: {
    port: process.env.PORT || 3000,
    timeout: 30000
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: 'json'
  }
};
