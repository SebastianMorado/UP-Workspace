var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'cs192'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/cs192-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'cs192'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/cs192-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'cs192'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/cs192-production'
  }
};

module.exports = config[env];
