describe("should",()=>{
    it("should be able to check or uncheck the checkbox",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="checkbox"]').click({'multiple':'true'});

    })
    it("should display editing template when clicked on edit button",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="edit-button"]').click({'multiple':'true'});
        
    });
    it("should return back to the viewing template when cancel button is clicked",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="edit-button"]').click({'multiple':'true'});
        cy.get('[data-testid="cancel-button"]').click({'multiple':'true'});

    });
    it("should return back to the viewing template with edited task name",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="edit-button"]').click({'multiple':'true'});
        cy.get('[data-testid="save-button"]').click({'multiple':'true'});
        
    });
    it("should delete tasks when clicked on delete button",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="delete-button"]').click({'multiple':'true'});
        
    });
    
    
});