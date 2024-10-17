module.exports = {
    default: {
      require: ['steps/*.js'],
      format: ['progress', 'json:test-results/cucumber-report.json'],
      parallel: 2,  // Allows running multiple scenarios in parallel
      publishQuiet: true
    }
  };
  