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
        
        cy.get(this.txt_email)
        .type('{selectall}{backspace}', { force: true }); 
        cy.get(this.txt_email)
        .type('tammy@redowl.io', { force: true });


        
        return this;
    }

    fillPassword(password: string) {
       
        cy.get(this.txt_password).should('be.visible').type(password);
       
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