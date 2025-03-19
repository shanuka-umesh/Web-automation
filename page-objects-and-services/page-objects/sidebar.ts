export class Sidebar {

    private item_sidebar = 'li button span'

    clickSidebarItem(itemName: string) {
        
        cy.get(this.item_sidebar)
        .contains(itemName)
        .click();

        return this;
    }

    sidebarItemIsVisible(itemName: string) {
        cy.get(this.item_sidebar)
        .contains(itemName)
        .should('be.visible');

        return this;
    }   
} 

