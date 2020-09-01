const ChallengeSignUpActions = new (require('../../actions/challengeSignUpActions'))();

describe('SignUp feature check if elements present', () => {
  it('Given open homePage', () =>
    ChallengeSignUpActions.openURL('http://automationpractice.com')
  );
  it('And confirm SignIn button is displayed', () =>
    ChallengeSignUpActions.confirmElementIsDisplayed(
        'signIn',
        'SignIn button'
    )
  );
  it('And click on SignIn button', () =>
    ChallengeSignUpActions.clickOnChosenElement('signIn')
  );
  it('When confirm email address input field is displayed', () =>
    ChallengeSignUpActions.confirmElementIsDisplayed(
        'emailInput',
        'Registration email input'
    )
  );
  it('Then confirm error is displayed', () =>
    ChallengeSignUpActions.confirmErrorMessageDisplayed(
        'emailInput',
        'Registration email input'
    )
  );
});
