## Setup
- install Node.js (https://nodejs.org/en/download) 
- install npm (https://www.npmjs.com/package/download)
- open project root folder from console
- run command "npm install"

## How to run
- run command "npm run cy:open:web"
- run command "npm run cy:run:web" to see test run report

## Test infra
- All tests located in the forder cypress/e2e and separated due to bissness logic.
- All selectors you can find in the forder cypress/pages/locators.
- All actions located in the forder cypress/pages/ to implement POM approach.
- All additional actions provided via API was located in the forder cypress/support/command.
- User generator was added in the forder cypress/support/helper to make it reusable.

## Test cases 
- You can find all test cases in the file TestCases.txt