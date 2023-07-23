import articleDetailsPage from '../pages/articleDetails.page';

describe('Comment', () => {
    beforeEach(() => {
        cy.register().then((response) => {
            cy.wrap(response.username).as('username');
        });
    });

    it('edit an article positive test', () => {
        cy.createArticle().then((link) => {
        articleDetailsPage.open(link)
        });

    articleDetailsPage.enterComment('test');
    articleDetailsPage.clickPublishCommentButton();
    articleDetailsPage.checkThatCommentHasValue('test');    
    });
});