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
  it('When click on SignIn button', () =>
    ChallengeSignUpActions.clickOnChosenElement('signIn')
  );
  it('Then confirm email address input field is displayed', () =>
    ChallengeSignUpActions.confirmElementIsDisplayed(
        'emailInput',
        'Registration email input'
    )
  );
});

describe('Incorrect SignUp - input empty email, mail without "@"', () => {
  it('Given input empty email - just click on "Create account button"', () =>
    ChallengeSignUpActions.clickOnChosenElement('createAccountButton')
  );
  it('And confirm Error message displayed', () =>
    ChallengeSignUpActions.confirmErrorMessageDisplayed(
        'errorMessage',
        'Invalid email address.'
    )
  );
  it('And input incorrect email - without "@"', () =>
    ChallengeSignUpActions.inputData(
        'emailInput',
        'fake.mail.com'
    )
  );
  it('And click on "Create account button"', () =>
    ChallengeSignUpActions.clickOnChosenElement('createAccountButton')
  );
  it('And confirm Error message displayed', () =>
    ChallengeSignUpActions.confirmErrorMessageDisplayed(
        'errorMessage',
        'Invalid email address.'
    )
  );
  it('And input incorrect email - without domain extension', () =>
    ChallengeSignUpActions.inputData(
        'emailInput',
        'fake.mail'
    )
  );
  it('When click on "Create account button"', () =>
    ChallengeSignUpActions.clickOnChosenElement('createAccountButton')
  );
  it('Then confirm Error message displayed', () =>
    ChallengeSignUpActions.confirmErrorMessageDisplayed(
        'errorMessage',
        'Invalid email address.'
    )
  );
});

describe('Input correct email and confirm validation exists on "Create account" page', () => {
  it('Given input correct email', () =>
    ChallengeSignUpActions.inputData(
        'emailInput',
        'test' + ChallengeSignUpActions.returnCurrentDate() + '@mailinator.com'
    )
  );
  it('And click on "Create account button"', () =>
    ChallengeSignUpActions.clickOnChosenElement('createAccountButton')
  );
  it('And confirm opened "Create account" page', () =>
    ChallengeSignUpActions.confirmCorrectPageOpened(
        'my-account#account-creation'
    )
  );
  it('And click on "Register" button', () =>
    ChallengeSignUpActions.clickOnChosenElement('registerButton')
  );
  it('When confirm validation displayed for eight fields', () =>
    ChallengeSignUpActions.confirmErrorMessageDisplayed(
        'eightErrorsTitle',
        'There are 8 errors'
    )
  );
  it('Then confirm validation displayed for eight fields', () =>
    ChallengeSignUpActions.confirmValidationOnRegisterPage(
        'eightErrors',
        8
    )
  );
});

describe('Correct registration', () => {
  it('Given check gender', () =>
    ChallengeSignUpActions.clickOnChosenElement('maleGender')
  );
  it('And input first name', () =>
    ChallengeSignUpActions.inputData(
        'firstName',
        'ZoranTest'
    )
  );
  it('And input last name', () =>
    ChallengeSignUpActions.inputData(
        'lastName',
        'LastNameTest'
    )
  );
  it('And input password', () =>
    ChallengeSignUpActions.inputData(
        'password',
        'pass345'
    )
  );
  it('And choose birth day', () =>
    ChallengeSignUpActions.clickOnChosenElement('day')
  );
  it('And choose birth month', () =>
    ChallengeSignUpActions.clickOnChosenElement('month')
  );
  it('And choose birth year', () =>
    ChallengeSignUpActions.clickOnChosenElement('year')
  );
  it('And input in address section first name', () =>
    ChallengeSignUpActions.inputData(
        'addressFirstName',
        'ZoranTest'
    )
  );
  it('And input in address section last name', () =>
    ChallengeSignUpActions.inputData(
        'addressLastName',
        'LastNameTest'
    )
  );
  it('And input in address section company name', () =>
    ChallengeSignUpActions.inputData(
        'company',
        'ACME Co'
    )
  );
  it('And input in address section address', () =>
    ChallengeSignUpActions.inputData(
        'addressOne',
        'ACME Co, Second street 1234'
    )
  );
  it('And input in address choose city', () =>
    ChallengeSignUpActions.inputData(
        'city',
        'San Francisco'
    )
  );
  it('And choose in address California state', () =>
    ChallengeSignUpActions.clickOnChosenElement('USState')
  );
  it('And input in address postal code', () =>
    ChallengeSignUpActions.inputData(
        'postalCode',
        '94102'
    )
  );
  it('And input in address landline number', () =>
    ChallengeSignUpActions.inputData(
        'landLine',
        '415-202-8128'
    )
  );
  it('And input in address mobile number', () =>
    ChallengeSignUpActions.inputData(
        'mobile',
        '+1-202-555-0189'
    )
  );
  it('And input in address alias', () =>
    ChallengeSignUpActions.inputData(
        'aliasAddress',
        'My address alias'
    )
  );
  it('When click on "Register" button', () =>
    ChallengeSignUpActions.clickOnChosenElement('registerButton')
  );
  it('Then confirm "SignOut" button is displayed', () =>
    ChallengeSignUpActions.confirmElementIsDisplayed(
        'logOutButton',
        'LogOut button'
    )
  );
});
