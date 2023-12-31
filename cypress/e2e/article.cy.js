import editActiclePage from '../pages/editArticle.page';
import articleDetailsPage from '../pages/articleDetails.page';

describe('Article', () => {
    const testLink = 'http://google.com'

    beforeEach(() => {
        cy.register().then((response) => {
            cy.wrap(response.username).as('username');
        });
    });

    it('create a new article', () => {
        //arrange
        editActiclePage.open();

        editActiclePage.enterTitle('My article title');
        editActiclePage.enterAboutField('test filed');
        editActiclePage.enterArticleBody(`Article body ${testLink}`);
        
        //act
        editActiclePage.clickPublishArticleButton();
        
        //assert
        editActiclePage.checkThatArticleHasTitle('My article title');
    });

    it('add tags to article', () => {
        //arrange
        editActiclePage.open();

        editActiclePage.enterTitle('My article title');
        editActiclePage.enterAboutField('test filed');
        editActiclePage.enterArticleBody(`Article body ${testLink}`);
        editActiclePage.addArticleTag('test{enter}');
        editActiclePage.checkArticleTag();
        editActiclePage.checkThatAddedTagContainsValue('test',1);
        editActiclePage.addArticleTag('newtest{enter}');
        editActiclePage.checkArticleTag();
        editActiclePage.checkThatAddedTagContainsValue('newtest',2);
        
        //act
        editActiclePage.clickPublishArticleButton();
        
        //assert
        editActiclePage.checkThatArticleHasTitle('My article title');
    });

    it('check article page by logged out user', function () {
        //arrange (precondition was done via api call)
        cy.createArticle().then((link) => {
            articleDetailsPage.clearBrowserData();
            articleDetailsPage.open(link);
        });

        //assert
        articleDetailsPage.checkThatTitleVisible();
        articleDetailsPage.checkThatActicleBunnerVisible();
        articleDetailsPage.checkThatActicleAuthorVisible;
        articleDetailsPage.checkThatActicleAuthorcontainsValue(this.username);
        articleDetailsPage.checkThatArticleFollowButtonVisible();
        articleDetailsPage.checkThatArticleFollowButtonVContainsValue(`Follow ${this.username}`);
        articleDetailsPage.checkThatArticleFavoriteButtonVisible();
        articleDetailsPage.checkThatArticleBodyVisible();
        articleDetailsPage.checkThatArticleCommentVisible();
        articleDetailsPage.checkThatArticleCommentVHasValue('Sign in or sign up to add comments on this article');
        articleDetailsPage.checkThatArticleActiosVisible();
    });

    it('edit an article positive test', () => {
        //arrange (precondition was done via api call)
        cy.createArticle().then((link) => {
            editActiclePage.open(link)
        });

        editActiclePage.checkThatTitleFieldVisible();
        editActiclePage.checkThatTitleFieldHasValue('QA article test');
        editActiclePage.checkThatAboutFieldVisible();
        editActiclePage.checkThatAboutFieldHasValue(testLink);
        editActiclePage.enterBodyField(`Test can edit an article. ${testLink}`);   
        
        //act
        editActiclePage.clickPublishButton();
        
        //asert
        cy.url().should('contain', '/article/QA-article-test')
        articleDetailsPage.checkThatTitleVisible();
        articleDetailsPage.checkThatArticleBodyVisible();
        articleDetailsPage.checkThatArticleBodyHasValue(`Test can edit an article. ${testLink}`);
    });

    it('delete an article positive test', () => {
        //arrange
        cy.intercept('DELETE', '/api/articles/**').as('deleteRequest')
        cy.createArticle().then((link) => {
            articleDetailsPage.open(link);
        });

        articleDetailsPage.checkThatTitleVisible();
        
        //act
        articleDetailsPage.clickDeleteArticleButton();
        
        //assert
        cy.wait('@deleteRequest')
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
    });
});
