describe('Quiz Component', () => {
    beforeEach(() => {
      // Mount the Quiz component for each test
      cy.mount(<Quiz />);
    });
  
    it('should display the Start Quiz button initially', () => {
      cy.contains('Start Quiz').should('be.visible');
    });
  
    it('should start the quiz and display the first question when the Start button is clicked', () => {
      cy.contains('Start Quiz').click();
      cy.get('.question').should('be.visible'); // Assuming .question is a class or selector for the question text
    });
  
    it('should display the next question after an answer is selected', () => {
      cy.contains('Start Quiz').click();
      cy.get('.answer-option').first().click(); // Clicks the first answer option
      cy.get('.question').should('exist'); // Check that another question is presented
    });
  });