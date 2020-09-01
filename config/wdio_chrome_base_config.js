const { config } = require('./wdio_main_config');

const localConfig = {
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
  }],
  services: ['selenium-standalone'],
  seleniumInstallArgs: {
    drivers: {
      chrome: { version: '85.0.4183.83' },
      firefox: { version: '0.27.0' },
    },
  },
  seleniumArgs: {
    drivers: {
      chrome: { version: '85.0.4183.83' },
      firefox: { version: '0.27.0' },
    },
  },
  beforeTest() {
    browser.maximizeWindow();
  },
};

module.exports.config = Object.assign(config, localConfig);
