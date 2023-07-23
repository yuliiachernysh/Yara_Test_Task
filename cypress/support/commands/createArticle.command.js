Cypress.Commands.add('createArticle', () => {
    const apiUrl = Cypress.env('apiUrl');
    const link = 'http://google.com';

    cy.request({
        url: `${apiUrl}/articles`,
        method: 'POST',
        headers: {
            authorization: `Token ${window.localStorage.getItem('jwtToken')}`
        },
        body: {
            article: {
                title: 'QA article test',
                description: link,
                body: `QA article test. Read description: ${link}`,
                tagList: ['cypress', 'simple', 'test-automation']
            }
        }
    })
        .then((response) => {
            expect(response.status).to.eq(201);
            
            return response.body.article.slug;
        });
});
