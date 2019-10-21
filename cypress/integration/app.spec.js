describe('interface', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads off game', () => {
    cy.contains('Simon').should('be.visible');
  });
});
