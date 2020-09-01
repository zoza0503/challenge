const { challengeSignupSelectors } = require('../test_data/challengeSignupSelectors');

class ProductPage {
  switchToIFrame() {
    browser.switchToFrame(0);
    browser.pause(1000);
  }

  confirmPriceIsReduced(priceCsss, reducedAmount) {
    const price = $(challengeSignupSelectors[priceCsss]).getText();

    if (!price.match(reducedAmount)) {
      throw new Error('Price is not  reduced for ' + reducedAmount);
    }
  }

  confirmSocialButtonDisplayed(socialButtonsCss, socialNetName, social) {
    const socialButtons = $(challengeSignupSelectors[socialButtonsCss] + socialNetName + '")]');

    if (!socialButtons.getAttribute('class').match(socialNetName)) {
      throw new Error('Not displayed button for: ' + social);
    }
  }
}

module.exports = ProductPage;
