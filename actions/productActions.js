const ProductPage = new (require('../pageobjects/productPage'))();
const { challengeSignupSelectors } = require('../test_data/challengeSignupSelectors');

class ProductActions {
  switchToIFrame() {
    ProductPage.switchToIFrame();
  }

  confirmPriceIsReduced(priceCsss, reducedAmount) {
    ProductPage.confirmPriceIsReduced(priceCsss, reducedAmount);
  }

  confirmSocialButtonDisplayed(socialButtonsCss, socialNetName, social) {
    ProductPage.confirmSocialButtonDisplayed(socialButtonsCss, socialNetName, social);
  }

  returnTotalAmount(amountCss) {
    return $(challengeSignupSelectors[amountCss]).getText();
  }
}

module.exports = ProductActions;
