const { challengeSignupSelectors } = require('../test_data/challengeSignupSelectors');

class ChallengeSignUpPage {
  clickOnChosenElement(buttonCss) {
    const button = $(challengeSignupSelectors[buttonCss]);

    button.click();
    browser.pause(3000);
  }

  openURL(partURL) {
    browser.url(partURL);
    browser.pause(5000);
  }

  confirmElementIsDisplayed(elementCss, elementName) {
    try {
      expect($(challengeSignupSelectors[elementCss])).toBeDisplayed();
    } catch (e) {
      throw new Error(
          'Element ' + elementName + ' is not displayed'
      );
    }
  }

  confirmErrorMessageDisplayed(errorCss, messageText) {
    const errorMsg = $(challengeSignupSelectors[errorCss]);

    if (errorMsg.getText() !== messageText) {
      throw new Error('Not displayed error message: ' + messageText);
    }
  }

  confirmCorrectPageOpened(partURL) {
    const currentPage = browser.getUrl();

    if (!currentPage.match(partURL)) {
      throw new Error('Not displayed expected page');
    }
  }

  inputData(elementCss, inputText) {
    const userData = $(challengeSignupSelectors[elementCss]);

    userData.setValue(inputText);
    browser.pause(1000);
  }

  returnCurrentDate() {
    const newDate = new Date(Date.now());
    let day = newDate.getUTCDate();
    let month = newDate.getMonth() + 1;

    day = 10 > day ? '0' + day.toString() : day;
    month = 10 > month ? '0' + month.toString() : month;

    return day + month + newDate.getFullYear();
  }

  confirmValidationOnRegisterPage(errorsCss, number) {
    const errorTitle = $$(challengeSignupSelectors[errorsCss]);

    expect(errorTitle.length).toEqual(number);
  }
}

module.exports = ChallengeSignUpPage;
