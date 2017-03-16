/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ad-challenge',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
      firebase:{
        apiKey: "AIzaSyAQT8S7QsFlclfGGaa0-yy4yO5Cj3ydRgM",
        authDomain: "messageboard-c00b5.firebaseapp.com",
        databaseURL: "https://messageboard-c00b5.firebaseio.com",
      storageBucket: "messageboard-c00b5.appspot.com",
      messagingSenderId: "716848483490"
      },
      torii: {
      sessionServiceName: 'session'
    },



    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
