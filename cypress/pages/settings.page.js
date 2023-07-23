import BasePage from "./base.page";
import settings from '../pages/selectors/settings'
import profileSettings from '../pages/selectors/profileSettings'

class SettingsPage extends BasePage{

    open(){
        cy.visit('/settings');
    }

    checkThatSettingsTitleIsVisible(){
        cy.get(settings.title).should('be.visible')
            .and('contain', 'Your Settings');
    }

    setImage(link){
        cy.get(settings.imageField).clear().type(link);
    }

    enterUserName(username){
        cy.get(settings.usernameField).clear().type(username);
    }

    enterBioInfo(bio){
        cy.get(settings.bioField).type(bio);
    }

    clickUpdateButton(){
        cy.get(settings.submitButton).click();
    }

    checkBioInfo(bio){
        cy.get(profileSettings.savedBio).should('be.visible')
            .and('have.text', bio);
    }

    checkProfileLogo(logoLink){
        cy.get(profileSettings.image).should('be.visible')
            .and('have.attr', 'src', logoLink);
    }
}
const settingsPage = new SettingsPage();
export default settingsPage;