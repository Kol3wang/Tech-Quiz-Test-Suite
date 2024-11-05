describe('Tech Quiz End-to-End', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001'); // Make sure this is the correct URL for your client app
  });

  it('should start the quiz when the Start button is clicked and display the first question', () => {
    cy.contains('Start Quiz').click();
    cy.wait(3000); // Wait for the first question to load

    // Verify that the first question is displayed
    cy.document().then((doc) => {
      cy.log('Page HTML:', doc.documentElement.outerHTML);
    });

    // Attempt to locate question using `cy.contains()` as a fallback
    cy.contains('What is', { timeout: 10000 }).should('be.visible');
  });

  it('should allow answering each question until the quiz is complete', () => {
    cy.contains('Start Quiz').click();

    // Loop through all questions assuming a fixed number, e.g., 10
    for (let i = 0; i < 10; i++) {
      cy.get('.answer-option', { timeout: 10000 }).first().click(); // Selects the first option with increased timeout
      cy.wait(500); // Wait between questions to allow the next one to load
    }

    // Verify that the score is displayed at the end
    cy.contains('Your Score', { timeout: 10000 }).should('be.visible');
  });

  it('should display an option to start a new quiz after completing the quiz', () => {
    cy.contains('Start Quiz').click();

    // Loop through and answer all questions
    for (let i = 0; i < 10; i++) {
      cy.get('.answer-option', { timeout: 10000 }).first().click();
      cy.wait(500);
    }

    // Check for the "Start New Quiz" button and click it
    cy.contains('Start New Quiz', { timeout: 10000 }).should('be.visible').click();

    // Verify that the quiz resets and the "Start Quiz" button is visible again
    cy.contains('Start Quiz', { timeout: 10000 }).should('be.visible');
  });
});