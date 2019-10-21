declare namespace Cypress {
  interface Chainable<Subject> {
    getBtn(name: string, options?: Cypress.Timeoutable): Chainable<any>;
  }
}
