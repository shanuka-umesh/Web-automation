import { Home } from "../../../page-objects-and-services/page-objects/Home";
import { Login } from "../../../page-objects-and-services/page-objects/login";

const home = new Home();
const login = new Login();

describe("Home page test suite", ()=>{

    beforeEach(()=>{
         cy.visit('https://assistant-dev1.redowl.io/login');

         login.fillEmail("tammy@redowl.io")
        .fillPassword("123456")
        .submit();

    });

    it("Click on the policy agent card",()=>{
        home.clickAgentCard("Policy Agent")       
    })

    it("Click on the ATO Specialist card",()=>{
        home.clickAgentCard("ATO Specialist")
    })

    it("Verify Policy Agent card visibility",()=>{
        home.verifyCardVisibility("Policy Agent");
    })

    it("Verify ATO Specialist card visibility",()=>{
        home.verifyCardVisibility("ATO Specialist");
    })

    it("Verify AASB Specialist card visibility",()=>{

        home.verifyCardVisibility("AASB Specialist");
    })

    it("Verify Board Paper Agent card visibility",()=>{
        home.verifyCardVisibility("Board Paper Agent");
    })

    it("Verify Doc Specialist card not visible",()=>{
        home.verifyCardVisibleNotEnable("Doc Specialist");
    })

    

});