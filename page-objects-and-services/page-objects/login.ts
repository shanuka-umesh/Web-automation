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
        cy.get(this.txt_email).type(email);
        return this;
    }

    fillPassword(password: string) {
        cy.get(this.txt_password).type(password);
        return this;
    }

    submit() {
        cy.get(this.btn_login).click();
        return this;
    }

    errorMessageAlert(expectedMessage: string) {

        cy.get(this.alrt_error).should('be.visible').and('contain', expectedMessage);
        return this;
    }
    


}       