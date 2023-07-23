import login from '../pages/selectors/login';
import BasePage from './base.page';

class LoginPage extends BasePage{
    open() {
        cy.visit('/login');
    }
    
    enterEmail(email){
        cy.get(login.emailField).type(email);
    }

    enterEmptyEmail(){
        cy.get(login.emailField).clear();
    }

    enterPassword(password){
        cy.get(login.passwordField).type(password);
    }

    clickButtonSignin(){
        cy.get(login.signInButton).should('have.text', 'Sign in').click();
    }

    checkErrorMessage(error){
        cy.get(login.errorMessages).should('be.visible')
                .and('contain', error);
    }
   
   }
   const loginPage = new LoginPage();
   export default loginPage;