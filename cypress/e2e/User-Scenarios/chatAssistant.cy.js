import { ChatAssistant } from "../../../page-objects-and-services/page-objects/ChatAssistant";
import { Home } from "../../../page-objects-and-services/page-objects/Home";
import { Login } from "../../../page-objects-and-services/page-objects/login";

const home = new Home();
const login = new Login();
const chatAssistant = new ChatAssistant();

describe("Chat Assistant test suite", ()=>{

    const chatAgents = [
        { name: "Policy Agent",expectedResponse: "Test" },
        { name: "ATO Specialist",expectedResponse: "Test" },
        { name: "AASB Specialist",expectedResponse: "Test"},
        { name: "Board Paper Agent",expectedResponse: "Test"}
    ];

    beforeEach(()=>{
        cy.visit('https://assistant-dev1.redowl.io/login');

        login.fillEmail("tammy@redowl.io")
       .fillPassword("123456")
       .submit();
    });

    chatAgents.forEach(({ name,expectedResponse }) => {

        it(`Sent a message to the ${name} chat assistant`,()=>{

            home.clickAgentCard(name)
            cy.wait(3000)
            chatAssistant.typeMessage("Hello")
                         .sendMessage() 
            cy.wait(5000)
          //  chatAssistant.validateResponse(expectedResponse)
        });

    });
     
});
