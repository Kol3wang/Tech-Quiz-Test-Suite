// cypress/support/commands.js

// Command to start the quiz
Cypress.Commands.add('startQuiz', () => {
    cy.visit('/');
    cy.contains('Start Quiz').click(); // Assumes 'Start Quiz' button text exists
  });

// Command to answer a question by selecting the first option
Cypress.Commands.add('answerQuestion', () => {
    cy.get('.answer-option').first().click(); // Update '.answer-option' to match your selector
  });

// Command to check if a question is displayed
Cypress.Commands.add('checkQuestionDisplayed', () => {
    cy.get('.question').should('be.visible'); // Update '.question' to match your selector
  });