describe("should",()=>{
    it("should display all tasks by default",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="buttons"]').should('have.prop.name','All');
    })
    it("display only active tasks when active button is clicked",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="buttons"]').contains('Active').click();

    });
    it("display only completed tasks when completed button is clicked",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="buttons"]').contains('Completed').click();
        
    })
})