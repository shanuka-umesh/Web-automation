export class Home {

    private card_Agent = 'ul:nth-child(4) > li'
    private btn_logOutStep01= "//button[@data-cy='sidebar_user_nav']"
    private btn_logOutStep02 = "//button[@data-cy='signout']"
    
    public visit(){
        cy.visit('https://assistant-dev1.redowl.io');
        return this;
    }

    public clickAgentCard(agentName: string){

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

    public logOut(){

        cy.visit('https://assistant-dev1.redowl.io');
        cy.wait(1000);
        cy.xpath(this.btn_logOutStep01).click();
        cy.xpath(this.btn_logOutStep02).click();

        cy.wait(2000);

    
          cy.clearCookies()
             .clearLocalStorage()

             .window().then((win) => {

                 win.sessionStorage.clear();
                 
             });

    
    cy.url().should('include', '/login');

    }

}
