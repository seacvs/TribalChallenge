## TribalChallenge
Sebastian Aceves Cardenas - Tribal Challenge




### Section 1. UI Manual Testing
UI Manual Testing can be found in **challenge_manual_UI.md**

### Section 2. API Manual Testing
 API Manual Testing can be found in **challenge_manual_API.md**

### Section 3. UI Automation
The automated test scripts where created with Cypress, I choose cypress because for it can complete the tests in a simple way and it is easy to use.



---

> You need to have installed cypress and typescript
  and can install them with these commands:
  
    npm install cypress
    npm install typescript

Initialize tsconfig.json, to ensure cypress is accesible by typescript

    npx tsc --init --types cypress --lib dom,es6
    

1. Run to create the package.json at project folder
    `npm init -y`

2. Run `npx cypress open` to start cypress

3. Select *cypress/integration/challenge_part1.ts* to execute the first part of the automation scripts

4. Select *cypress/integration/challenge_part2.ts* to execute the second part of the automation scripts


Thanks!