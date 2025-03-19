import { Login } from "../../../page-objects-and-services/page-objects/login";

const login = new Login();

describe("Login test suite", ()=>{

    beforeEach(()=>{
        login.visit();
    });

    it("Login with valid credentials", ()=>{
        login.fillEmail("tammy@redowl.io")
        .fillPassword("123456")
        .submit();

        cy.url().should("include", "https://assistant-dev1.redowl.io");
       
    });


    it("Login with both email , password invalid credentials", ()=>{
        login.fillEmail("daf@redowl.io")
        .fillPassword("12")
        .submit()
        .errorMessageAlert("Failed validating your submission!");
        
    });

    it("Login with correct password and invalid email", ()=>{

        login.fillEmail("dfsd@redowl.io")
        .fillPassword("123456")
        .submit()
        .errorMessageAlert("Invalid credentials!");

    });

    it("Login with correct email and invalid password", ()=>{

        login.fillEmail("tammy@redowl.io")
        .fillPassword("12323464656")
        .submit()
        .errorMessageAlert("Invalid credentials!");

    });


    

});