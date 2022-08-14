describe("functionality of input form",()=>{
    it("should empty the text field after clicking add button",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="input-form"]').type('draw');
        cy.get('[data-testid="add-button"]').click();
        cy.get('[data-testid="input-form"]').should('have.value','');
    });
    it("should display the task in the task list",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="input-form"]').type('draw');
        cy.get('[data-testid="add-button"]').click();
        cy.contains('draw');
    });
});