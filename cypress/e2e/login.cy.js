import loginPage from '../pages/login.page';
import userDataGenerator from '../support/helpers/dataGenerator.helper';

describe('Login', () => {
    context('successful', () => {
        beforeEach(() => {
            const username = userDataGenerator.generateUserName();
            const password = userDataGenerator.generatePassword();
            
            cy.register(username, password).then((response) => {
                cy.wrap(response.email).as('email');
            });
            cy.wrap(password).as('password');
            
            loginPage.clearBrowserData();
            loginPage.open();
        });

        it(' login with valid username/password', function () {
            loginPage.enterEmail(this.email);
            loginPage.enterPassword(this.password);

            loginPage.clickButtonSignin();
            
            loginPage.checkThatHeaderIsVisible();
        });
    }); 

    context('unsuccessful', () => {
        beforeEach(() => {
            loginPage.open();
        });

        it('login with incorrect username/password', () => {
            loginPage.enterEmail('randomemail@fakemail.com');
            loginPage.enterPassword('randompassword');
            loginPage.clickButtonSignin();
            loginPage.checkErrorMessage('email or password is invalid');
        });

        it('login with empty username', () => {
            loginPage.enterEmptyEmail();
            loginPage.enterPassword('random_pass');
            loginPage.clickButtonSignin();
            loginPage.checkErrorMessage('email can\'t be blank');
        });

        it('check API respond for login with incorrect username/password', () => {
            const apiUrl = Cypress.env('apiUrl');

            cy.intercept('POST', `${apiUrl}/users/login`, {
                statusCode: 500,
                fixture: 'login_error'
            });
            loginPage.enterEmail('random2@test.com');
            loginPage.enterPassword('random_pass{enter}');
            loginPage.checkErrorMessage('Error 500 - Internal server error');
        });
    });
});
