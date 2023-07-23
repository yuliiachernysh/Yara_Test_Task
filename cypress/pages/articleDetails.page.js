import BasePage from "./base.page";
import editor from './selectors/editor'
import article from './selectors/article'

class ArticleDetailsPage extends BasePage{
    open(link){        
        cy.visit(`/article/${link}`);
    }

    checkThatTitleVisible(){
        cy.get(article.title).should('be.visible');
    }

    checkThatActicleBunnerVisible(){
        cy.get(article.banner).should('be.visible');
    }

    checkThatActicleAuthorVisible(){
    cy.get(article.author).should('be.visible');
    }

    checkThatActicleAuthorcontainsValue(value){
        cy.get(article.author).should('have.text',value);
    }

    checkThatArticleFollowButtonVisible(){
        cy.get(article.followButton).should('be.visible');
    }

    checkThatArticleFollowButtonVContainsValue(value){
        cy.get(article.followButton).should('contain', value);
    }

    checkThatArticleFavoriteButtonVisible(){
        cy.get(article.favoriteButton).should('be.visible');
    }

    checkThatArticleBodyVisible(){
        cy.get(article.body).should('be.visible');
    }

    checkThatArticleBodyHasValue(value){
        cy.get(article.body).should('have.text',value);
    }

    checkThatArticleCommentVisible(){
        cy.get(article.commentTextForLoggedOutUsers).should('be.visible');
    }

    checkThatArticleCommentVHasValue(value){
        cy.get(article.commentTextForLoggedOutUsers).should('be.visible');
    }

    checkThatArticleActiosVisible(){
        cy.get(article.actions).should('be.visible');
    }

    clickDeleteArticleButton(){
        cy.get(article.deleteButton).click();
    }

    clickPublishCommentButton(){
        cy.get(article.postCommentButton).click();
    }

    enterComment(commentText){
        cy.get(article.commentField).type(commentText);
    }

    checkThatCommentHasValue(value){
        cy.get(article.comments).first().should('have.text', value);
    }
}
const articlePage = new ArticleDetailsPage();
export default articlePage;