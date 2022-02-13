/// <reference types="cypress" />

context('Purchase Actions', () => {
    beforeEach(() => {
      cy.visit('/');
    })
  
    it('Add items to purchase', () => {
        cy.get('[data-cy=add-to-cart-2]').click()
        cy.get('[data-cy=add-to-cart-3]').click()
        cy.get('[data-cy=badge-count]').should('have.text', '2')
         cy.get('[data-cy=badge-count]').click().should('be.visible')
        cy.get('[data-cy=add-purchase]').click()
        
    })
  })
  