import { Sidebar } from "../../../page-objects-and-services/page-objects/sidebar";
import { Login } from "../../../page-objects-and-services/page-objects/login";
import { Home } from "../../../page-objects-and-services/page-objects/Home";

const sidebar = new Sidebar();
const login = new Login();
const home = new Home();

describe("Sidebar test suite", ()=>{

    const menuItems = [
        { name: "Dashboard", url: "/dashboard" },
        { name: "Apps", url: "/" },
        { name: "Knowledge", url: "/" },
        { name: "Tasks", url: "/" },
        { name: "Records", url: "/" },
        { name: "Reports", url: "/" }
    ];

    beforeEach(()=>{

        cy.visit('https://assistant-dev1.redowl.io/login');

        login.fillEmail("tammy@redowl.io")
       .fillPassword("123456")
       .submit();

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