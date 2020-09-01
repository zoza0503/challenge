const ChallengeSignUpActions = new (require('../../actions/challengeSignUpActions'))();
const ProductActions = new (require('../../actions/productActions'))();
let amountTotal = '';
let amountTotalCheckout = '';

describe('Work with chosen product', () => {
  it('Given open homePage', () =>
    ChallengeSignUpActions.openURL('http://automationpractice.com')
  );
  it('And confirm search input is displayed', () =>
    ChallengeSignUpActions.confirmElementIsDisplayed(
        'searchField',
        'Search input field'
    )
  );
  it('And input "Printed dresses” into search', () =>
    ChallengeSignUpActions.inputData(
        'searchField',
        'Printed dresses”'
    )
  );
  it('And click on magnifier icon', () =>
    ChallengeSignUpActions.clickOnChosenElement('searchButton')
  );
  it('And pause to load search', () =>
    browser.pause(2000)
  );
  it('And click on first product', () =>
    ChallengeSignUpActions.clickOnChosenElement('firstProduct')
  );
  it('And switch to iFrame fancy products', () =>
    ProductActions.switchToIFrame()
  );
  it('And confirm, price is reduced for 5%', () =>
    ProductActions.confirmPriceIsReduced(
        'reductionPrice',
        '-5%'
    )
  );
  it('And confirm Twitter social button displayed', () =>
    ProductActions.confirmSocialButtonDisplayed(
        'socialNetworks',
        'twitter',
        'Twitter'
    )
  );
  it('And confirm Facebook social button displayed', () =>
    ProductActions.confirmSocialButtonDisplayed(
        'socialNetworks',
        'facebook',
        'Facebook'
    )
  );
  it('And confirm Google+ social button displayed', () =>
    ProductActions.confirmSocialButtonDisplayed(
        'socialNetworks',
        'google-plus',
        'Google+'
    )
  );
  it('And confirm Pinterest social button displayed', () =>
    ProductActions.confirmSocialButtonDisplayed(
        'socialNetworks',
        'pinterest',
        'Pinterest'
    )
  );
  it('And change quantity to 3', () =>
    ChallengeSignUpActions.inputData(
        'changeQuantity',
        '3'
    )
  );
  it('And change size to M', () =>
    ChallengeSignUpActions.clickOnChosenElement('sizeM')
  );
  it('And choose blue color', () =>
    ChallengeSignUpActions.clickOnChosenElement('colorBlue')
  );
  it('And click on "Add to cart"', () =>
    ChallengeSignUpActions.clickOnChosenElement('addToCartButton')
  );
  it('And confirm new color is blue, size is M', () =>
    ProductActions.confirmPriceIsReduced(
        'productSizeAndColor',
        'Blue, M'
    )
  );
  it('And confirm quantity is 3', () =>
    ProductActions.confirmPriceIsReduced(
        'productQuantity',
        '3'
    )
  );
  it('And save total amount', () =>
    amountTotal = ProductActions.returnTotalAmount('totalAmount')
  );
  it('And click on "Proceed to Checkout"', () =>
    ChallengeSignUpActions.clickOnChosenElement('proceedToCheckoutButton')
  );
  it('And save total amount on last page', () =>
    amountTotalCheckout = ProductActions.returnTotalAmount('amountCheckout')
  );
  it('And confirm amount is correct', () =>
    expect(amountTotal).toEqual(amountTotalCheckout)
  );
  it('And click on "Proceed to Checkout"', () =>
    ChallengeSignUpActions.clickOnChosenElement('proceedTwo')
  );
  it('And input login email', () =>
    ChallengeSignUpActions.inputData(
        'loginEmail',
        'test' + ChallengeSignUpActions.returnCurrentDate() + '@mailinator.com'
    )
  );
  it('And input login password', () =>
    ChallengeSignUpActions.inputData(
        'loginPassword',
        'pass345'
    )
  );
  it('And click on "SignIn" button', () =>
    ChallengeSignUpActions.clickOnChosenElement('logInButton')
  );
  it('And click on "Proceed" button on address page', () =>
    ChallengeSignUpActions.clickOnChosenElement('proceedAddress')
  );
  it('And agree on T&Cs conditions', () =>
    ChallengeSignUpActions.clickOnChosenElement('tcsButton')
  );
  it('And click on "Proceed" button career page', () =>
    ChallengeSignUpActions.clickOnChosenElement('shippingProceed')
  );
  it('And choose BankWire payment', () =>
    ChallengeSignUpActions.clickOnChosenElement('clickOnBankWirePayment')
  );
  it('When click on "I confirm my order"', () =>
    ChallengeSignUpActions.clickOnChosenElement('confirmOrderButton')
  );
  it('Then confirm "Your order on My Store is complete" is displayed', () =>
    ProductActions.confirmPriceIsReduced(
        'orderComplete',
        'Your order on My Store is complete.'
    )
  );
});
