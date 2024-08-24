describe('search products', () => {
  it('should be able to search for products', () => {
    // visit home neste teste para que ele não aconteceça no segundo teste
    cy.searchByQuery('moletom')
    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit search page without a search query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
