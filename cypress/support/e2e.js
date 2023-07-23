import './commands/createArticle.command'
import './commands/register.command'

Cypress.on('uncaught:exception', (err, runnable) => false)
