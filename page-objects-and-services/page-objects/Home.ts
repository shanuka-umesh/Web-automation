export class Home {

    private card_Agent = 'ul:nth-child(4) > li'
    
    public visit(){
        cy.visit('https://assistant-dev1.redowl.io');
        return this;
    }

    public clickAgentCard(agentName: string){

        this.visit();
        cy.wait(2500);
        cy.get(this.card_Agent)
        .contains(agentName)
            .click();
            cy.wait(2500);
        return this;
    }
    public verifyCardVisibility(agentName: string) {
            
        cy.wait(2000);
        cy.get(this.card_Agent)
        .contains(agentName)
        .should('be.visible')
        .click();

        cy.wait(1000);
       
    return this;
    }

    public verifyCardVisibleNotEnable(agentName: string) {

        cy.wait(2000);

        cy.get(this.card_Agent)
        .contains(agentName)
        .should('be.visible')
        .and('have.css', 'opacity', '0.6')  
        .and('have.css', 'cursor', 'not-allowed')  
        .click({ force: false }); 

        cy.wait(1000);

        return this;
    }

}
