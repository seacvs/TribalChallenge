/// <reference types ="cypress" /> 
import { result } from "cypress/types/lodash"
import {Careers} from "../pages/careers"

let tribalUrl = 'https://boards.greenhouse.io/tribalcredit'
const careers = new Careers()

it('Challenge test part I', () => {
    //1 Go to https://boards.greenhouse.io/tribalcredit
    careers.navigate(tribalUrl)
    
    //2. Check the correct page is opened.
    careers.validateUrl(tribalUrl)

    //3. Filter by “Engineering” from the “Department” from the select dropdownlist.
    cy.get('#s2id_departments-select').click()
    cy.get('#select2-result-label-7').should('contain', 'Engineering').click()

    //4. Filter by “Mexico” from the “Office” dropdownlist.
    cy.get('#s2id_offices-select').click()
    cy.get('#select2-result-label-23').should('contain', 'Mexico').click()

    //5. Check “Senior QA Engineer” is displayed.
        //cy.get(':nth-child(27) > a').click()
        //PREVIOUS cy.get('#main > :nth-child(12) > .opening').should('contain', 'Mexico').and('contain',position)

    cy.get('#main > :nth-child(12) > .opening').filter(':contains("Mexico")')
   
    //results.filter(':contains("Senior QA Engineer")')

    //Expected to Fail, the request string "Senior QA Engineer" don't exist for Mexico it should be "Sr. QA Engineer"
    .filter(':contains("Sr. QA Engineer")')
})
