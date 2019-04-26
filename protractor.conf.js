exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/Registration.feature'
  ],
  cucumberOpts: {
    require: 'features/steps/registration_steps.js',
    
    tags: '@registration'
  }
}
