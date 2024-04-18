
/// <reference types="cypress" />
describe('Test Case 1',() => {
    it('should verify title ,click on mobile, and sort product by name',() => {
        //step 1 Go to http://live.panda.org/
        cy.visit('http://live.techpanda.org/');

        //cy.get('.large').type('contain','THIS IS DEMO SITE FOR');
        //step 2 Verify Title of the page
        //cy.get('h2').should('eq','Mobile');
        cy.get('.nav-1 > .level0').type('contain','THIS IS DEMO FOR');
    });
});

it('should navigate to mobilesection and sort product by name',() => {
    cy.visit('http://live.techpanda.org/');
    cy.contains('Mobile').click();
    cy.get('select[title="Sort By"]').contains('Name');

    //Step 5 In the list of all mobile,select 'Sort BY' dropdown as 'Name'
    const productNames = [];
    cy.get('.product-name').each(($product) => {
        productNames.push($product.text());
    }).then(() => {
        const sortedProductNames = [...productNames].sort();

        expect(productNames).to.deep.equal(sortedProductNames);
    });
});

