# challenge

Install node.js with node package manager if not installed already) - download it from:

**https://www.npmjs.com/get-npm**

Confirm Node is installed, by typing following command in your terminal:

**node -v**

Confirm npm is installed, by typing following command in your terminal:

**npm -v**

Create working directory and switch to it

**mkdir webdriverio-test && cd webdriverio-test**

Initialize and install dependencies necessary to webdriver.io works correctly

**npm init -y**

Install CLI (command line interface)

**npm i --save-dev @wdio/cli**

Generate configuration file for all settings (Additional info regarding npx command: https://www.npmjs.com/package/npx)

**npx wdio config -y**

Check if JDK is isntalled:

**java --version**

And you get something like this:

**java version "1.8.0_281" ...**

Selenium comes together with webdrver.io installation, but just to be sure, run following

**selenium-standalone**

You will get answer similar to this (which means that you already have Selenium standalone server):

**No action provided ...**

If not, then do the following:

**npm install @wdio/selenium-standalone-service --save-dev**

Chrome Driver is already isntalle, check this page:

**https://www.npmjs.com/package/wdio-chromedriver-service**

Or just simply install it by running following command:

**npm install wdio-chromedriver-service --save-dev**

Next is to add selenium-standalone into wdio.conf.js in order to use it

[![first.png](https://i.postimg.cc/htKsQvVW/first.png)](https://postimg.cc/D8YLt2CB)

NOTE: Above, both Chrome & Firefox setups added, since that both browser are added by default

So, config file will looks like:

[![second.png](https://i.postimg.cc/Y21QNkrp/second.png)](https://postimg.cc/CdxZY3nt)

NOTE: bail:true is additional config, which give user when run tests, and step fail to not step test immediatelly, bu rather finish all steps and present results.
Setup selenium in standalone mode

**https://webdriver.io/docs/setuptypes.html**

All dependencies are in package.json, should looks like the one below:

[![third.png](https://i.postimg.cc/L8hqWMpg/third.png)](https://postimg.cc/NKqfySLQ)

Run test with folowing command:

**npm run test -- {project_name}/config/{environment_}chrome.js --spec {test_name}**
