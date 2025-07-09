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

    selectProduct1(){
        cy.get(element.product1).click();
    }

    cartProduct({
        nameProduct1
    }){
        cy.get(element.cart).click();
        cy.wait(1000);
        cy.get(element.verifyPage).contains('Your Cart');
        cy.get(element.inventoryCart).contains(nameProduct1);
    }

    checkout({
        firstName, lastName, postalCode
    }){
        cy.get(element.checkoutButton).click();
        cy.get(element.verifyPage).contains('Checkout: Your Information');
        cy.get(element.firstname).type(firstName);
        cy.get(element.lastname).type(lastName);
        cy.get(element.postalCode).type(postalCode);
    }

    continue({
        nameProduct1
    }){
        cy.get(element.continueButton).click();
        cy.get(element.verifyPage).contains('Checkout: Overview');
        cy.get(element.inventoryCart).contains(nameProduct1);
    }

    finish(){
        cy.get(element.finishButton).click();
        cy.get(element.verifyPage).contains('Checkout: Complete');
        cy.get(element.checkoutComplete).contains('Thank you');
    }
}

export default new SauceDemoPage();