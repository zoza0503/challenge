# challenge

Install node.js with node package manager if not installed already) - download it from: 
*https://www.npmjs.com/get-npm*

Confirm Node is installed, by typing following command in your terminal:

```node -v
```

Confirm npm is installed, by typing following command in your terminal:

```npm -v
```

Create working directory and switch to it

```mkdir webdriverio-test && cd webdriverio-test
```

Initialize and install dependencies necessary to webdriver.io works correctly

```npm init -y
```

Install CLI (command line interface)

```npm i --save-dev @wdio/cli
```

Generate configuration file for all settings (Additional info regarding npx command: https://www.npmjs.com/package/npx)

```npx wdio config -y
```

Check if JDK is isntalled:

```java --version
```

And you get something like this:

```java version "1.8.0_281" ...
```

Selenium comes together with webdrver.io installation, but just to be sure, run following

```selenium-standalone
```

You will get answer similar to this (which means that you already have Selenium standalone server):
No action provided ...

If not, then do the following:
npm install @wdio/selenium-standalone-service --save-dev

Chrome Driver is already isntalle, check this page:
https://www.npmjs.com/package/wdio-chromedriver-service

Or just simply install it by running following command:
npm install wdio-chromedriver-service --save-dev

Next is to add selenium-standalone into wdio.conf.js in order to use it

export.config = {    
    services: [
        ['selenium-standalone', {
            logPath: 'logs',
            installArgs: {
                drivers: {
                    chrome: { version: '85.0.4183.83' },
                    firefox: { version: '0.26.0' }
                }
            },
            args: {
                drivers: {
                    chrome: { version: '85.0.4183.83' },
                    firefox: { version: '0.26.0' }
                }
            },
        }]
    ],    
};

NOTE: Above, both Chrome & Firefox setups added, since that both browser are added by default

So, config file will looks like:


module.exports.config = {
  runner: 'local',
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  reporters: ['spec'],
  baseUrl: 'http://localhost',
  waitforTimeout: 25000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    bail: true,
    timeout: 99999999,
  },
  before: function() {
    require('expect-webdriverio');
  },
};

NOTE: bail:true is additional config, which give user when run tests, and step fail to not step test immediatelly, bu rather finish all steps and present results.
Setup selenium in standalone mode
https://webdriver.io/docs/setuptypes.html

All dependencies are in package.json, should looks like the one below:
{
  "name": "challenge",
  "version": "1.0.0",
  "description": "Repository to hold all challenge tests",
  "main": "index.js",
  "scripts": {},
  "dependencies": {
    "shelljs": "^0.8.3"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/zoza0503/challenge.git"
  },
  "author": "",
  "license": "ISC",
  "homepage": "github.com/zoza0503/challenge#readme"
}

Run test with folowing command:
npm run test -- {project_name}/config/{environment_}chrome.js --spec {test_name}
