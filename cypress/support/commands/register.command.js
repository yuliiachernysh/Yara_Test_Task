import userDataGenerator from '../helpers/dataGenerator.helper';

Cypress.Commands.add('register', (username, password) => {
    const apiUrl = Cypress.env('apiUrl');
    username = username == undefined ? userDataGenerator.generateUserName() : username;
    password = password == undefined ? userDataGenerator.generatePassword() : password;
    const email = userDataGenerator.generateEmail(username);

    cy.request({
        url: `${apiUrl}/users`,
        method: 'POST',
        body: {
            user: {
                username: username,
                email: email,
                password: password
            }
        }
    })
        .then((response) => {
            expect(response.status).to.eq(201);
            window.localStorage.setItem('jwtToken', response.body.user.token);

            cy.log('**user created**');
            cy.log(`**email: ${email}**`);
            cy.log(`**password: ${password}**`);
        })
        .then(() => ({
            email: email,
            username: username
        }));
});
