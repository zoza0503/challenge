const CategoriesPage = new (require('../pageobjects/categoriesPage'))();

class CategoriesActions {
  clickOnComplexElement(categoryCss, categoryTitle) {
    CategoriesPage.clickOnComplexElement(categoryCss, categoryTitle);
  }

  assertCategoryElements(containersCss, elementsCss, attribute, number) {
    const containers = CategoriesPage.returnCategoryContainers(containersCss);
    const productImages = CategoriesPage.returnCategoryElements(elementsCss, attribute);

    expect(containers).toEqual(number);
    expect(productImages).toEqual(number);
  }

  savingInFile() {
    CategoriesPage.savingInFile();
  }
}

module.exports = CategoriesActions;
