import { Home } from "../../../page-objects-and-services/page-objects/Home";
import { Login } from "../../../page-objects-and-services/page-objects/login";

const home = new Home();
const login = new Login();

describe("Home page test suite", ()=>{

    const agentName = [

        { name: "ATO Specialist" },
        { name: "AASB Specialist" },
        { name: "Policy Agent" },
        { name: "Board Paper Agent" }
    ]
    
    beforeEach(()=>{
         cy.visit('https://assistant-dev1.redowl.io/login');

         login.fillEmail("tammy@redowl.io")
        .fillPassword("123456")
        .submit();

    });

    agentName.forEach(({ name }) => {

        it(`Verify ${name} card visibility`, () => {
            home.verifyCardVisibility(name);
        });

        it(`Click on the ${name} card`, () => {
            home.clickAgentCard(name);
        });

    });

    it("Verify Doc Specialist card not visible",()=>{
        home.verifyCardVisibleNotEnable("Doc Specialist");
    })

    

});