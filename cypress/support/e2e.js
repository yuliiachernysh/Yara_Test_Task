import './commands/createArticle.command'
import './commands/register.command'
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => false)
