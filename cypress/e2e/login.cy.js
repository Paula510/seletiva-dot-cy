describe('Teste de Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login com sucesso', () => {
    cy.fixture('users').then((data) => {
      cy.get('[data-test="username"]').type(data.UserValid.username)
      cy.get('[data-test="password"]').type(data.UserValid.password)
      cy.get('[data-test="login-button"]').click()
      cy.url().should('include', '/inventory.html')
    })
  })

  it('Login bloqueado', () => {
    cy.fixture('users').then((data) => {
      cy.get('[data-test="username"]').type(data.UserBlocked.username)
      cy.get('[data-test="password"]').type(data.UserBlocked.password)
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('contain', 'locked out')
    })
  })
})