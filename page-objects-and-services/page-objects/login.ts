 export class Login {
 
    private txt_email = '#username' 
    private txt_password = '#password' 
    private btn_login = 'button[type="submit"]' 
    private alrt_error = 'li[aria-live="polite"]'

    visit() {
        cy.visit('https://assistant-dev1.redowl.io/login');
        return this;
    }

    fillEmail(email: string) {
        cy.wait(1000);
        cy.get(this.txt_email).should('not.be.disabled').type(email);
        cy.wait(1000);
        return this;
    }

    fillPassword(password: string) {
        cy.wait(1000);
        cy.get(this.txt_password).should('not.be.disabled').type(password);
        cy.wait(1000);
        return this;
    }

    submit() {
        cy.wait(1000);
        cy.get(this.btn_login).should('be.enabled').click();
        
        return this;
    }

    errorMessageAlert(expectedMessage: string) {
        cy.wait(1000);

        cy.get(this.alrt_error).should('be.visible').and('contain', expectedMessage);
        return this;
    }
    


}       