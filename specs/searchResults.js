const ChallengeSignUpActions = new (require('../../actions/challengeSignUpActions'))();
const CategoriesActions = new (require('../../actions/categoriesActions'))();

describe('Confirm search input field present and save into .txt field search results', () => {
  it('Given open homePage', () =>
    ChallengeSignUpActions.openURL('http://automationpractice.com')
  );
  it('And confirm search input is displayed', () =>
    ChallengeSignUpActions.confirmElementIsDisplayed(
        'searchField',
        'Search input field'
    )
  );
  it('And input "“Printed dresses” into search', () =>
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
  it('And save results into text.txt fiel', () =>
    CategoriesActions.savingInFile()
  );
});
