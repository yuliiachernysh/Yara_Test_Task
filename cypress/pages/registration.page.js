import registration from '../pages/selectors/signup'
import BasePage from './base.page';

class RegistrationPage extends BasePage{

    open(){
        cy.visit('/register');
    }

    enterUserName(username){
        cy.get(registration.userNameField).type(username, { delay: 50 });
    }

    enterEmail(email){
        cy.get(registration.emailField).type(email);
    }

    enterEmptyEmail(){
        cy.get(registration.emailField).clear();
    }

    enterPassword(password){
        cy.get(registration.passwordField).type(password);
    }

    clickOnSignupButton(){
        cy.get(registration.signUpButton).click();
    }

    cherckErrorMessage(error){
        cy.get(registration.errorMessages).should('be.visible')
                .and('contain',error)
    }

}
const registrationPage = new RegistrationPage();
export default registrationPage;