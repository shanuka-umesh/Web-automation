import { ChatAssistant } from "../../../page-objects-and-services/page-objects/ChatAssistant";
import { Login } from "../../../page-objects-and-services/page-objects/login";
import { Home } from "../../../page-objects-and-services/page-objects/Home";
import { Sidebar } from "../../../page-objects-and-services/page-objects/sidebar";

const chatAssistant = new ChatAssistant();
const home = new Home();
const login = new Login();
const sidebar = new Sidebar();

describe("Chat Assistant Header test suite", () => {
    const chatAgents = [
        { name: "ATO Specialist" },
        { name: "AASB Specialist" },
        { name: "Policy Agent" },
        { name: "Board Paper Agent" }
    ];


    beforeEach(() => {
        login.createLoginSession();
        cy.visit('https://assistant-dev1.redowl.io');
    });

    after(() => {
        home.logOut();
    });

    chatAgents.forEach(({ name }) => {
        
        it(`Verify ${name} Title when clicking on ${name}`, () => {
            
            home.clickAgentCard(name);
            chatAssistant.verifyChatAssistantHeaderTitle(name);

            sidebar.sidebarItemIsVisible("Agents")
                .clickSidebarItem("Agents");
        });
    });
});
