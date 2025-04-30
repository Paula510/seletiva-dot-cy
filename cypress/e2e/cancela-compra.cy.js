describe('Visitar Site', () => {
  it('Desiste da venda no carrinho', () => {
    cy.login();

    cy.adicionaItemAoCarrinho();

    cy.get('[data-test="shopping-cart-link"]')
      .should('be.visible')
      .click();

    cy.location('pathname', { timeout: 10000 }).should('eq', '/cart.html');

    cy.get('.cart_item').should('have.length.at.least', 1);

    cy.get('#remove-sauce-labs-backpack').click();

    cy.get('#continue-shopping').click();

  });
});