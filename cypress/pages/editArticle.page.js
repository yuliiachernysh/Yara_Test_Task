import BasePage from "./base.page";
import editor from './selectors/editor'
import article from './selectors/article'

class EditArticlePage extends BasePage{
    open(link){
        if(link != undefined){
            cy.visit(`/editor/${link}`);
        }else{
            cy.visit('/editor/');
        }
    }

    enterTitle(articleTitle){
        cy.get(editor.titleField).type(articleTitle);
    }

    enterAboutField(aboutField){
        cy.get(editor.aboutField).type(aboutField);
    }

    enterArticleBody(articleBody){
        cy.get(editor.bodyField).type(articleBody);
    }

    clickPublishArticleButton(){
        cy.get(editor.publishButton).click();
    }

    checkThatArticleHasTitle(articleTitle){
        cy.get(article.title).should('be.visible')
            .and('have.text', articleTitle);
    }

    addArticleTag(articleTag){
        cy.get(editor.tagsField).type(articleTag);
    }

    checkArticleTag(){
        cy.get(editor.tagsField).should('have.value', '');
    }

    checkThatAddedTagContainsValue(value, lenght){
        cy.get(editor.addedTags).should('be.visible')
            .and('have.length', lenght)
            .and('contain', value);
    }

    checkThatTitleFieldVisible(){
        cy.get(editor.titleField).should('be.visible');
    }

    checkThatTitleFieldHasValue(value){
        cy.get(editor.titleField).should('have.value', value);
    }

    checkThatAboutFieldVisible(){
        cy.get(editor.aboutField).should('be.visible');
    }

    checkThatAboutFieldHasValue(value){
        cy.get(editor.aboutField).should('have.value', value);
    }

    enterBodyField(value){
        cy.get(editor.bodyField).clear().type(value);
    }

    clickPublishButton(){
        cy.get(editor.publishButton).click();
    }
}
const articlePage = new EditArticlePage();
export default articlePage;