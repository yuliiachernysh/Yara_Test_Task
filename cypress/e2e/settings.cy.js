import settingsPage from '../pages/settings.page';
import userDataGenerator from '../support/helpers/dataGenerator.helper';

describe('Settings', () => {
    beforeEach(() => {
        cy.register();
        settingsPage.open();
    });

    it('update user settings positive test', () => {
        //arrange 
        const logoLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8UByEpXu70220rviM11pe7W6xWOPne5Kww&usqp=CAU';
        const username = userDataGenerator.generateUserName();

        settingsPage.checkThatHeaderIsVisible();
        settingsPage.setImage(logoLink);
        settingsPage.enterUserName(username);
        settingsPage.enterBioInfo('update bio');

        //act
        settingsPage.clickUpdateButton();
        
        //arrange
        cy.url().should('eq', `${Cypress.config('baseUrl')}/@${username}`);
        settingsPage.checkBioInfo('update bio');
        settingsPage.checkProfileLogo(logoLink);
    });
});
