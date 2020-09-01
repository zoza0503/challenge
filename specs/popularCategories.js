const ChallengeSignUpActions = new (require('../../actions/challengeSignUpActions'))();
const CategoriesActions = new (require('../../actions/categoriesActions'))();

describe('Confirm popular & best sellers categories memebers number', () => {
  it('Given open homePage', () =>
    ChallengeSignUpActions.openURL('http://automationpractice.com')
  );
  it('And confirm SignIn button is displayed', () =>
    ChallengeSignUpActions.confirmElementIsDisplayed(
        'signIn',
        'SignIn button'
    )
  );
  it('And open "Popular" category', () =>
    CategoriesActions.clickOnComplexElement(
        'categoryChosen',
        'Popular'
    )
  );
  it('And confirm present are 7 products', () =>
    CategoriesActions.assertCategoryElements(
        'productContainers',
        'productImage',
        'src',
        7
    )
  );
  it('When open "Best Sellers" category', () =>
    CategoriesActions.clickOnComplexElement(
        'categoryChosen',
        'Best Sellers'
    )
  );
  it('And confirm present are 7 products', () =>
    CategoriesActions.assertCategoryElements(
        'productContainers',
        'productImage',
        'src',
        7
    )
  );
});
