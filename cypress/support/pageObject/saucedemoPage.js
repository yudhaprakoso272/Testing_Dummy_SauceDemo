const element = require ('../elementPage/saucedemoPage.json');

class SauceDemoPage {
    loginSauceDemo({
        username, password
    }){
        cy.get(element.username).type(username);
        cy.get(element.password).type(password);
        cy.get(element.loginButton).click();
        cy.get(element.verifyLogin).contains('Products');
    }
}

export default new SauceDemoPage();