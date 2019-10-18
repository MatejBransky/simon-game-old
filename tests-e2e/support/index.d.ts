declare namespace Cypress {
  interface Chainable {
    printToConsole: (text: string) => Cypress.Chainable<JQuery>;
  }
}
