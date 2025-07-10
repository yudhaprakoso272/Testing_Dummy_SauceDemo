const saucedemoPage = require ('../support/pageObject/saucedemoPage');
const saucedemoData = require ('../fixtures/data/saucedemoData.json');

describe('Checkout Product on SauceDemo Website', () => {

  it('Positive - Checkout with valid data', () => {
    cy.visit('/');
    cy.wait(1000);
    saucedemoPage.loginSauceDemo(saucedemoData.loginData);
    cy.wait(1000);
    saucedemoPage.selectProduct1();
    saucedemoPage.cartProduct(saucedemoData.inventoryCart);
    saucedemoPage.checkout(saucedemoData.informationCheckout);
    saucedemoPage.continue(saucedemoData.inventoryCart);
    saucedemoPage.finish();
  });

  it('Negative - Checkout with error data', () => {
    cy.visit('/');
    cy.wait(1000);
    saucedemoPage.loginSauceDemo(saucedemoData.loginData);
    cy.wait(1000);
    saucedemoPage.selectProduct1();
    saucedemoPage.cartProduct(saucedemoData.inventoryCart);
    saucedemoPage.continue3();
  });

  it('Negative - Checkout with invalid data', () => {
    cy.visit('/');
    cy.wait(1000);
    saucedemoPage.loginSauceDemo(saucedemoData.loginData);
    cy.wait(1000);
    saucedemoPage.selectProduct2();
    saucedemoPage.cartProduct2(saucedemoData.inventoryCart);
    saucedemoPage.checkout2(saucedemoData.checkoutInvalid);
    saucedemoPage.continue2(saucedemoData.inventoryCart);
    saucedemoPage.finish();
    saucedemoPage.logout();
  });
});