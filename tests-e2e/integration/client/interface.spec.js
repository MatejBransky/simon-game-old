context('Interface', () => {
  it('succesfully loads', () => {
    cy.visit('/');
  });

  it('uses custom command for printing in console', () => {
    cy.printToConsole('doo');
  });
});
