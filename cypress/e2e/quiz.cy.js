describe('Tech Quiz End-to-End', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should start the quiz when the Start button is clicked and display the first question', () => {
      cy.contains('Start Quiz').click();
      cy.get('.question').should('be.visible');
    });
  
    it('should allow answering each question until the quiz is complete', () => {
      cy.contains('Start Quiz').click();
  
      // Loop through all questions assuming a fixed number, e.g., 10
      for (let i = 0; i < 10; i++) {
        cy.get('.answer-option').first().click(); // Selects the first option
      }
  
      // Verify that the score is displayed at the end
      cy.contains('Your Score').should('be.visible');
    });
  
    it('should display an option to start a new quiz after completing the quiz', () => {
      cy.contains('Start Quiz').click();
  
      // Loop through and answer all questions
      for (let i = 0; i < 10; i++) {
        cy.get('.answer-option').first().click();
      }
  
      // Check for the "Start New Quiz" button
      cy.contains('Start New Quiz').should('be.visible').click();
  
      // Verify that the quiz resets
      cy.contains('Start Quiz').should('be.visible');
    });
  });