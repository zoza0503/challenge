const { challengeSignupSelectors } = require('../test_data/challengeSignupSelectors');
const fs = require('fs');

class CategoriesPage {
  clickOnComplexElement(categoryCss, categoryTitle) {
    const category = $(challengeSignupSelectors[categoryCss] + categoryTitle + '")]');

    category.click();
    browser.pause(1000);
  }

  returnCategoryElements(elementsCss, attribute) {
    const categoryElements = $$(challengeSignupSelectors[elementsCss]);
    let sum = 0;

    categoryElements.forEach((category) => {
      if (category.getAttribute(attribute)) {
        sum++;
      }
    });

    return sum;
  }

  returnCategoryContainers(containersCss) {
    return $$(challengeSignupSelectors[containersCss]).length;
  }

  savingInFile() {
    const product = $(challengeSignupSelectors.productsAfterSearch).getText();

    fs.writeFile('wettbasis/test_data/test', product, function(err) {
      if (err) throw err;
    });
  }
}

module.exports = CategoriesPage;
