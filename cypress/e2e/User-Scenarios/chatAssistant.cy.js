import { ChatAssistant } from "../../../page-objects-and-services/page-objects/ChatAssistant";
import { Home } from "../../../page-objects-and-services/page-objects/Home";
import { Login } from "../../../page-objects-and-services/page-objects/login";

const home = new Home();
const login = new Login();
const chatAssistant = new ChatAssistant();

describe("Chat Assistant test suite", ()=>{

    beforeEach(()=>{
        cy.visit('https://assistant-dev1.redowl.io/login');

        login.fillEmail("tammy@redowl.io")
       .fillPassword("123456")
       .submit();

       
       
          

    });

    it("Sent a message to the Policy Agent chat assistant",()=>{

      home.clickAgentCard("Policy Agent")
        cy.wait(3000)
        chatAssistant.typeMessage("Hello")
                     .sendMessage() 
        cy.wait(5000)
        chatAssistant.validateResponse("Hi there! How can I assist you today with your Corporate Spend Policy queries?")
 
    });

    it("Sent a message to the ATO Specialist chat assistant", () => {
       
        home.clickAgentCard("ATO Specialist")
        cy.wait(3000)
        chatAssistant.typeMessage("Hello")
                     .sendMessage() 
        cy.wait(5000)
        chatAssistant.validateResponse("Hello! I’m Redowl ATO Assistant, your assistant for Corporate tax and tax topics. What would you like to know about corporate tax or any other tax-related questions today?")
 
        
    });
     
});
