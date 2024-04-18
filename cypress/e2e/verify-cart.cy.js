/// <reference types="cypress" />
/*Verify that you cannot add more product in cart than the product available in store”*/

describe('Test Cases 3',() => {
    it('should verify cart functionality for sony xperia mobile', ()=> {
        //Step 1.Go to http://live.tecpanda.org/
        cy.visit('http://live.techpanda.org/');
        

        //Step 2 Click on Mobile menu
    cy.contains('Mobile').click();

    //Step 3 In the list of all mobile ,click on ADD TO CART,Sony Xperia mobile
//cy.contains('Sony Xperia').parent().type('button[title="Add to Cart"]').click();
//cy.contains('.h1').as('btn')
cy.get('#product-collection-image-1').parent().type('Add to Cart');
//cy.contains('Mobile').click();

/* step.4 change 'QTY' value to 1000 and click 'UPDATE' button*/

cy.get('.qty-wrapper > label').type('1000');
cy.get('#qty').clear().click();

/* Verify the error message*/
cy.get('.add-to-cart-buttons > .button > :nth-child(1) > span').find('have.text','The requested quantity for "Sony Xperia " is not available.');

/* Step:6 on 'EMPTY CART' link in the footer of list of all mobiles.A message "SHOPPONG CART IS EMPTY" is show*/
cy.get('.footer a[title="Empty Cart"]').click();

/* Verify cart is empty*/

cy.get('.cart-empty ').should('have.text','You have on items in your shopping cart');

    });

    
    

    });
