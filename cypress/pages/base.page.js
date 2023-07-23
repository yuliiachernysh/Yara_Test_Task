import header from './selectors/headers'

export default class BasePage{
    checkThatHeaderIsVisible(){
        cy.get(header.settingsLink).should('be.visible');
    }

    clearBrowserData(){
        cy.clearCookies();
        cy.clearLocalStorage();
    }
}
