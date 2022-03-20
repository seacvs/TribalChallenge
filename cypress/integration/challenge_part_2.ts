/// <reference types ="cypress" />
import { Careers } from "../pages/careers";

// PART 2. Create a new test to check all the filtering options
// from the “Department” and “Office” dropdown lists are
// displayed and can be selected .

let tribalUrl = "https://boards.greenhouse.io/tribalcredit";
const careers = new Careers();

it("Challenge test part II", () => {
  //1 Go to https://boards.greenhouse.io/tribalcredit
  careers.navigate(tribalUrl);

  //Open Department dropdown and check elements
  cy.get("#s2id_departments-select").click();
  careers.checkDropdownElements();

  //Hide drop mask div
  cy.get("#select2-drop-mask").click();

  //Open Office dropdown and check elements
  cy.get("#s2id_offices-select").click();
  careers.checkDropdownElements();
});
