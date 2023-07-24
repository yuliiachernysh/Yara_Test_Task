import articleDetailsPage from '../pages/articleDetails.page';

describe('Comment', () => {
    beforeEach(() => {
        cy.register().then((response) => {
            cy.wrap(response.username).as('username');
        });
    });

    it('edit an article positive test', () => {
        //arrange (precondition was done via api call)
        cy.createArticle().then((link) => {
        articleDetailsPage.open(link)
        });

    //act    
    articleDetailsPage.enterComment('test');
    articleDetailsPage.clickPublishCommentButton();

    //assert
    articleDetailsPage.checkThatCommentHasValue('test');    
    });
});