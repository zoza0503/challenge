const ChallengeSignUpPage = new (require('../pageobjects/challengeSignUpPage'))();

class ChallengeSignUpActions {
  openURL(partURL) {
    ChallengeSignUpPage.openURL(partURL);
  }

  confirmElementIsDisplayed(elementCss, elementName) {
    ChallengeSignUpPage.confirmElementIsDisplayed(elementCss, elementName);
  }

  clickOnChosenElement(buttonCss) {
    ChallengeSignUpPage.clickOnChosenElement(buttonCss);
  }

  confirmErrorMessageDisplayed(errorCss, messageText) {
    ChallengeSignUpPage.confirmErrorMessageDisplayed(errorCss, messageText);
  }

  inputData(elementCss, inputText) {
    ChallengeSignUpPage.inputData(elementCss, inputText);
  }

  returnCurrentDate() {
    ChallengeSignUpPage.returnCurrentDate();
  }

  confirmCorrectPageOpened(partURL) {
    ChallengeSignUpPage.confirmCorrectPageOpened(partURL);
  }

  confirmValidationOnRegisterPage(errorsCss, number) {
    ChallengeSignUpPage.confirmValidationOnRegisterPage(errorsCss, number);
  }
}

module.exports = ChallengeSignUpActions;
