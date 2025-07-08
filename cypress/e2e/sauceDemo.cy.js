const saucedemoPage = require ('../support/pageObject/saucedemoPage');
const saucedemoData = require ('../fixtures/data/saucedemoData.json');

describe('Checkout Product on SauceDemo Website', () => {

  it('Positive - Checkout with valid data', () => {
    cy.visit('/');
    cy.wait(1000);
    saucedemoPage.loginSauceDemo(saucedemoData.loginData);
    cy.wait(1000);
    
  });
});