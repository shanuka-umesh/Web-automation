import 'cypress-xpath';

export class ChatAssistant {

  private txt_message = 'textarea[placeholder="Send a message..."]';
  private btn_send = "button.rounded-full.absolute.bottom-2.right-2";
  //private txt_response =  '[data-role="assistant"] .message';
  private txt_response =  "//div[@class='flex flex-col rounded-lg p-2 gap-1 w-full bg-sidebar_header']/div/p[1]";
  private chatAssistantHeaderTitle = '.text-xl';


  public verifyChatAssistantHeaderTitle(title : string){
    cy.wait(1000);
      cy.get(this.chatAssistantHeaderTitle).should('be.visible').and('contain', title);
      return this;
  }

  public typeMessage(message: string) {
    cy.wait(1000);
    cy.get(this.txt_message).type(message);
    return this;
  }

  public sendMessage() {
    cy.wait(1000);
    cy.get(this.btn_send).click();
    cy.window().then((win) => {
        cy.wrap(win.WebSocket.OPEN, { timeout: 10000 }).should("eq", 1); // Ensure WebSocket is open
    });
    cy.wait(1000);
    return this;
  }

  public validateResponseExists() {
    cy.wait(1000);
    cy.xpath(this.txt_response, { timeout: 15000 })
      .should("be.visible");
    return this;
  }

  public validateResponse(expectedResponse: string) {
    cy.xpath(this.txt_response, { timeout: 15000 }).should("be.visible").and("contain", expectedResponse);
    return this;
  }

  

}
