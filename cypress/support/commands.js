// cypress/support/commands.js

// Command to start the quiz
Cypress.Commands.add('startQuiz', () => {
    cy.visit('/');
    cy.contains('Start Quiz').click(); // Assumes 'Start Quiz' button text exists
  });