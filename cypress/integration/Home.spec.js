/// <reference types="cypress" />

describe('Home', () => {
  context('720px resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    describe('When you visite page home', () => {
      it('Shoul navegate to home page', () => {
        cy.visit('http://localhost:3000/')
        expect(cy.get('[role="link-avatar"]')).to.exist
      })
    })

    describe('list transactions search title', () => {
      it('Shoul list', () => {
        cy.get('[data-cy="search-input"]').type('Transação')

        cy.get('[role="search-btn"]').click()
        cy.url().should('include', '/', { search: 'Transação 0' })
      })
    })

    describe('List', () => {
      it('Shoul list transactions', () => {
        cy.get('[role="list"]:first')
          .should('contain', 'Transação 0')
          .should('contain', 'Registro da transação 0')
      })
    })

    describe('list transactions search status', () => {
      it('Shoul list transactions', () => {
        cy.get('[role="search-combobox"]').select('Warning')
        cy.get('[role="search-btn"]').click()
        cy.url().should('include', '/', { status: 'Warning' })
      })
    })

    describe('List check', () => {
      it('Shoul list transactions', () => {
        cy.get('[role="list"]:eq(1)').should('contain', 'Transação 9')
      })
    })
  })

  context('iphone-5 resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-5')
    })

    describe('When you visite page home', () => {
      it('Shoul navegate to home page', () => {
        cy.visit('http://localhost:3000/')
      })
    })

    describe('list characters', () => {
      it('Shoul list characters', () => {
        cy.get('[data-cy="search-input"]').type('Transação 0')
        cy.get('[role="combobox"]:first').click()

        cy.get('[role="search-btn"]').click()
        cy.url().should('include', '/', { title: 'Transação 0', status: '' })
      })
    })

    describe('List', () => {
      it('Shoul list transactions', () => {
        cy.get('[role="list"]:first')
          .should('contain', 'Transação 0')
          .should('contain', 'Registro da transação 0')
      })
    })
  })
})
