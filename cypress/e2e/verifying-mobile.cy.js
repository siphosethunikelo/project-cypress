/// <reference types="cypress" />

describe('Test Cases 2',() => {
    it('should verify product price ', () => {
        //Go to http://live.techpanda.org/
        cy.visit('http://live.techpanda.org/');
    });
});

it('should be verify the cost of Xperia ', () => {
    cy.visit('http://live.techpanda.org/');
    
    //Step:2 Click on MObile
    cy.contains('Mobile').click();

    
    /* Step:3In the list of all mobile ,read the cost of Sony Xperia mobile ($100)*/ 
    cy.get('#product-price-1 > .price').then((xperiaPrice) =>{
        const XperiaPrices = xperiaPrice.text();
        
        /* Step:4 Click on Sony Xperia mobile*/
    cy.get('#product-price-1 > .price').click();
    // Click on Sony Xperia mobile
    //cy.get('#product-price-1 > .price').click();

    /*step 5.Read the XPeria mobile price from details page*/
    cy.get('span.price').then($detailPrice => {
        const detailPrice = $detailPrice.text();
        
        /* Product price in list and details page should be equal*/
        
        expect(xperiaPrice).to.be.equal(xperiaPrice);
    });  

    });

   
});