export class Careers {
        //1.1 Go to https://boards.greenhouse.io/tribalcredit
        navigate(url : string){
            cy.visit(url)
        }

        //1.2 Check the correct page is opened.
        validateUrl(url: string){
            cy.url().should('eq', url)
        }


        //2.1 check dropdown elements are displayed and can be selected
        checkDropdownElements(){
            cy.get('.select2-results > li > .select2-result-label')
            .should(($items) => {
                expect($items).to.be.visible
        })         
    }


}