/// <reference types="cypress" />

describe('Home', () => {
  context('720px resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    describe('When you visite page home', () => {
      it('Shoul navegate to home page', () => {
        cy.visit('/')
      })
    })

    describe('list transactions', () => {
      it('Shoul list', () => {
        cy.get('[data-cy="search-input"]').type('Transação 0')

        cy.get('[data-cy="search-btn"]').click()
        cy.url().should('include', 'characters/rick?page=1')
      })
    })

    describe('List', () => {
      it('Shoul list transactions', () => {
        cy.get('[role="list"]:first')
          .should('contain', 'Transação 0')
          .should('contain', 'Registro da transação 0')
          .should('contain', 'done')
      })
    })
  })

  context('iphone-5 resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-5')
    })

    describe('When you visite page home', () => {
      it('Shoul navegate to home page', () => {
        cy.visit('/')
      })
    })

    describe('list characters', () => {
      it('Shoul list characters', () => {
        cy.get('[data-cy="nav-input"]').type('rick')

        cy.get('[role="button"]').click()
        cy.url().should('include', 'characters/rick?page=1')
      })
    })

    describe('Modal', () => {
      it('Shoul modal character', () => {
        cy.get('[role="item_container"]:first').click()
        cy.get('[role="modal"]')
          .should('contain', 'SOBRE')
          .should('contain', 'ORIGEM')
          .should('contain', 'LOCALIDADE')
      })
    })
  })
})
