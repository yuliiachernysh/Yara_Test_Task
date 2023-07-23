import registrationPage from '../pages/registration.page';
import userDataGenerator from '../support/helpers/dataGenerator.helper';

describe('Register', () => {

    beforeEach(() => {
        const userName = userDataGenerator.generateUserName();
        const email = userDataGenerator.generateEmail(userName);

        cy.wrap(userName).as('username');
        cy.wrap(email).as('email');

        registrationPage.open();
    });

    it('register a new account positive test', function () {
        registrationPage.enterUserName(this.username);
        registrationPage.enterEmail(this.email);
        registrationPage.enterPassword('test');

        registrationPage.clickOnSignupButton();

        registrationPage.checkThatHeaderIsVisible();
    });

    it('register new user with empty email', function () {
        registrationPage.enterUserName(this.username);
        registrationPage.enterEmptyEmail();
        registrationPage.enterPassword('test');

        registrationPage.clickOnSignupButton();
        
        registrationPage.cherckErrorMessage('email can\'t be blank');
    });

    it('check registration request body and response', function () {
        const apiUrl = Cypress.env('apiUrl');

        cy.intercept(`${apiUrl}/users`).as('loginRequest');
        registrationPage.enterUserName(this.username);
        registrationPage.enterEmail(this.email);
        registrationPage.enterPassword('Cypress12{enter}');
    
        cy.wait('@loginRequest').then((xhr) => {
            expect(xhr.request.body.user.email).to.eq(this.email);
            expect(xhr.request.body.user.password).to.eq('Cypress12');
            expect(xhr.request.body.user.username).to.eq(this.username);
            expect(xhr.response.body.user.email).to.eq(this.email);
            expect(xhr.response.body.user.token).not.to.eq(null);
        });
        registrationPage.checkThatHeaderIsVisible();
    });
});
