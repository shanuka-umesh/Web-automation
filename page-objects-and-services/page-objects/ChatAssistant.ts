import 'cypress-xpath';

export class ChatAssistant {

  private txt_message = 'textarea[placeholder="Send a message..."]';
  private btn_send = "button.rounded-full.absolute.bottom-2.right-2";
 // private txt_response =  '[data-role="assistant"] .message';
  private txt_response01 =  "(//div[@class='flex flex-col rounded-lg p-2 gap-1 w-full bg-sidebar_header'])[1]";
  private chatAssistantHeaderTitle = '.text-xl';

  private lbl_steps = "//button[@type='button']";
  private area_steps = "//div[@class='progress-step w-full max-w-3xl mx-auto px-6 py-3']";


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
    cy.xpath(this.txt_response01, { timeout: 15000 })
      .should("be.visible");
    return this;
  }

  public validateResponse(expectedResponse: string) {

    cy.xpath(this.txt_response01, { timeout: 10000 })
      .should("be.visible")
      .and("contain", expectedResponse);
    return this;

  }


  public validateStepslabel(){

      cy.xpath(this.lbl_steps, { timeout: 15000 }).should("be.visible").and('contain', 'Steps');

      return this
  }


  public validateSelectingToolsText(){

      cy.xpath(this.area_steps, { timeout: 15000 }).should("be.visible").and('contain', ' 🛠 Selecting tools...talk_to_human_tool');

      return this
  }

  public validateNeedUserText(){

    cy.xpath(this.area_steps, { timeout: 15000 }).should("be.visible").and('contain', ' 👤 Need user input');


  }

  

}
