describe('Visitar Site', () => {
  it('Efetua a venda de um item', () => {
    cy.login();

    cy.adicionaItemAoCarrinho();

    cy.get('[data-test="shopping-cart-link"]')
      .should('be.visible')
      .click();

    cy.location('pathname', { timeout: 10000 }).should('eq', '/cart.html');

    cy.get('.cart_item').should('have.length.at.least', 1);

    cy.get('#checkout').click();

    cy.preencheCheckout('Paula', 'Alves', '09352555');

    cy.finalizaCompra();
  });
});