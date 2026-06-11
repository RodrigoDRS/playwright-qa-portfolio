## About:
E2E and API tests performed on the website: "https://practice.expandtesting.com/" with a way to practice automation with PlayWright.

## Technologies:
- Node.js
- Playwright
- Javascript
- Faker

## How to execute:
1. Clone repository and install dependencies
```
   npm install
```

2. Execute tests in headless
```
   npx playwright test
```

3. Check test report
```
   npx playwright show-report
```
## OBS. 1:
(In this project, I used an action-based implementation instead of implementing using PageObjects because it offers greater flexibility in where to implement the actions, with all the actions of a test implemented in a single location.)

## OBS. 2: 
Based on the error message displayed in the system, usernames in uppercase should not be accepted, but they are being accepted. A failed test was left in the automation to demonstrate that the automation works and the bug is in the system.