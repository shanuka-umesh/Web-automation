import { Sidebar } from "../../../page-objects-and-services/page-objects/sidebar";
import { Login } from "../../../page-objects-and-services/page-objects/login";
import { Home } from "../../../page-objects-and-services/page-objects/Home";

const sidebar = new Sidebar();
const login = new Login();
const home = new Home();

describe("Sidebar test suite", ()=>{

    const menuItems = [
        { name: "Dashboard", url: "/dashboard" },
        { name: "Summary", url: "/summary" },
        { name: "Apps", url: "/" },
        { name: "Knowledge", url: "/" },
        { name: "Tasks", url: "/" },
        { name: "Records", url: "/" },
        { name: "Reports", url: "/" }
    ];

    
   beforeEach(() => {
    login.createLoginSession();
    cy.visit('https://assistant-dev1.redowl.io');
});

after(() => {
    home.logOut();
});

    menuItems.forEach(({ name, url }) => {
        it(`Click on the Menu Item: ${name} and verify navigation`, () => {
            
            cy.wait(1000);
            sidebar.sidebarItemIsVisible(name)
            .clickSidebarItem(name);
           
            cy.url().should('include', url);
        });
    });

});