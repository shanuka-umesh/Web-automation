import { RightSidebar } from "../../../page-objects-and-services/page-objects/RightSidebar";
import { Login } from "../../../page-objects-and-services/page-objects/login";
import { Home } from "../../../page-objects-and-services/page-objects/Home";


const rightSidebar = new RightSidebar();
const login = new Login();
const home = new Home();

describe("Right Sidebar test suite", () => {

  const chatAgents = [
    { name: "ATO Specialist" , description : "Agent trained on ATO content to answer ATO related queries." },
   // { name: "AASB Specialist", description : "Agent trained to answer AASB implementation questions."},
   // { name: "Policy Agent", description : "Agent to assist with in managing accounting & finance policy."},
   // { name: "Board Paper Agent", description : "Agent specializing assisting CFO with board requests." },
  ]; 

  beforeEach(() => {
    cy.visit("https://assistant-dev1.redowl.io/login");

    login.fillEmail("tammy@redowl.io")
                .fillPassword("123456")
                .submit();

    cy.wait(2500);
  });

  chatAgents.forEach(({ name,description }) => {

    it(`verify the ${name} : Info Label`, () => {

      cy.wait(1000);

      home.clickAgentCard(name);
      rightSidebar.verifyAgentInfoLabel();
      
      cy.wait(2500);

    });

    it(`verify the ${name} : Agent Name`, () => {

      home.clickAgentCard(name);
      rightSidebar.verifyAgentName(name);
      
      cy.wait(2500);

    });

    it(`verify the ${name} : Agent Description`, () => {

      home.clickAgentCard(name);
      rightSidebar.verifyAgentDescription(description);
      
      cy.wait(2500); 

    });

    it(`verify the ${name} : File Label`, () => {
        
      home.clickAgentCard(name);
      rightSidebar.verifyFilesLabel();
      
      cy.wait(2500);

    });

    it(`verify the ${name} : File picker available`, () => {

      home.clickAgentCard(name);
      rightSidebar.verifyFilesUploadArea(); 
      
      cy.wait(2500);

    });

    it(`verify the ${name} : Conversation Stats Label`, () => {

      home.clickAgentCard(name);
      rightSidebar.verifyConversationStatsLabel();
      
      cy.wait(2500);

    });

    it(`verify the ${name} : Message Label`, () => {
      
      home.clickAgentCard(name);
      rightSidebar.verifyMessageLabel();
      
      cy.wait(2500);

    });

    it(`verify the ${name} : Message Count when start`, () => {
      
      home.clickAgentCard(name);
      rightSidebar.verifyMessageCountWhenStart();
      
      cy.wait(2500);

    });

    it(`verify the ${name} : User Info Label`, () => {

      home.clickAgentCard(name);
      rightSidebar.verifyUserInfoLabel();
      
      cy.wait(2500);

    });

    it(`Verify the ${name} : User Email Address in User info section`, () => {

      home.clickAgentCard(name);
      rightSidebar.verifyUserEmail("tammy@redowl.io");
      
      cy.wait(2500);

    });

    it(`Verify the ${name} : Actions label`, () => {

      home.clickAgentCard(name);
      rightSidebar.verifyActionsLabel();
      
      cy.wait(2500);

    }); 


    it(`Verify the ${name} : Export Chat Button Visibility`, () => {

      home.clickAgentCard(name);
      rightSidebar.verifyExportButtonVisibility();
      
      cy.wait(2500);

    });

    it(`Verify the ${name} : Share Conversation Button Visibility`, () => {

      home.clickAgentCard(name);
      rightSidebar.verifyShareButtonVisibility(); 
      
      cy.wait(2500);

    }); 

    it(`Verify the ${name} : should_hide_sidebar_when_close_button_is_clicked `, () => {

      home.clickAgentCard(name);
      rightSidebar.closeInfoPanel();
      rightSidebar.verifySidebarHidden();

 
      
      cy.wait(2500);  

    });

   /* it(`Verify the ${name} : should open right sidebar when click on button `, () => {

      home.clickAgentCard(name);



      rightSidebar.openInfoPanel(); 
      rightSidebar.verifySidebarVisible();
      
      cy.wait(2500);  

    });  */

  });
});
