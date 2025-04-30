Cypress.Commands.add('login', () => {
  cy.fixture('users').then((data) => {
    const user = data.UserValid;

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type(user.username)
    cy.get('#password').type(user.password)


    cy.get('#login-button').click()


    cy.url().should('include', '/inventory.html')
  })
});

Cypress.Commands.add('adicionaItemAoCarrinho', (itemId = '#add-to-cart-sauce-labs-backpack') => {
  cy.get(itemId, { timeout: 10000 })
    .should('be.visible')
    .click();

  cy.get('.shopping_cart_badge').should('contain', '1');
});

Cypress.Commands.add('preencheCheckout', (nome, sobrenome, cep) => {
  cy.get('#first-name').type(nome);
  cy.get('#last-name').type(sobrenome);
  cy.get('#postal-code').type(cep);
});

Cypress.Commands.add('finalizaCompra', () => {
  cy.get('#continue').click()
    .get('#finish').click()
    .get('#back-to-products').click();
});