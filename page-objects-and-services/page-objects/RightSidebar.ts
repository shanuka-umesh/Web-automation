export class RightSidebar {

    private lbl_AgentInfo = "//h3[normalize-space()='Agent Info']"
    private section_agentName = "//body/div[1]"
    private lbl_agentDescription = "//p[@class='text-muted-foreground']"
    private lbl_files = "//h3[normalize-space()='Files']"
    private area_filesUpload = "//label[@for='file-upload']"
    private lbl_conversationStats = "//h3[normalize-space()='Conversation Stats']"
    private lbl_Message = "//span[@class='text-muted-foreground']"
    private area_message = "//div[@class='flex justify-between']"
    private lbl_userInfo = "//h3[normalize-space()='User Info']"
    private lbl_userEmail = "(//div[@class='space-y-2 text-sm'])[3]"
    private lbl_actions = "//h3[normalize-space()='Actions']"
    private btn_ExportChat = "//button[normalize-space()='Export Chat']"
    private btn_ShareConversation = "//button[normalize-space()='Share Conversation']"
    private btn_closeInfoPanel = "//button[@title='Close info panel']//*[name()='svg']"
    private area_rightSidebar = "//div[@class='lg:block border-l border-border transition-all duration-300 w-80 opacity-100']"


    public verifyAgentInfoLabel(){

        cy.xpath(this.lbl_AgentInfo).should('be.visible').and('contain', 'Agent Info')
        .wait(1000);
        return this;

    }
    
    public verifyAgentName(agentName: string){

        cy.wait(1000);
        cy.xpath(this.section_agentName).should('be.visible').and('contain', agentName);
        cy.wait(1000);
        return this;

    }

    public verifyAgentDescription(description: string){
        cy.wait(1000);
        cy.xpath(this.lbl_agentDescription).should('be.visible').and('contain', description);
        cy.wait(1000);
        return this;

    }

    public verifyFilesLabel(){
        cy.wait(1000);
        cy.xpath(this.lbl_files).should('be.visible').and('contain', 'Files');
        cy.wait(1000);
        return this;

    }

    public verifyFilesUploadArea(){
        cy.wait(1000);
        cy.xpath(this.area_filesUpload).should('be.visible').and('not.be.disabled');
        cy.wait(1000);
        return this;

    }

    public verifyConversationStatsLabel(){
        cy.wait(1000);
        cy.xpath(this.lbl_conversationStats).should('be.visible').and('contain', 'Conversation Stats');
        cy.wait(1000);
        return this;

    }

    public verifyMessageLabel(){
        cy.wait(1000);
        cy.xpath(this.lbl_Message).should('be.visible').and('contain', 'Messages');
        
        cy.wait(1000);
        
        return this;

    }

    public verifyMessageCountWhenStart(){

        cy.wait(1000);
        cy.xpath(this.area_message).should('be.visible').and('contain', '0');
        cy.wait(1000);
        return this;

    }

    public verifyUserInfoLabel(){
        cy.wait(1000)
        .xpath(this.lbl_userInfo).should('be.visible').and('contain', 'User Info')
        .wait(1000);
        return this;

    }

    public verifyUserEmail(email: string){
        cy.wait(1000);
        cy.xpath(this.lbl_userEmail).should('be.visible').and('contain', email);
        cy.wait(1000);
        return this;

    }

    public verifyActionsLabel(){
        cy.wait(1000);
        cy.xpath(this.lbl_actions).should('be.visible').and('contain', 'Actions');
        cy.wait(1000);
        return this;

    }

    public verifyExportButtonVisibility(){
        cy.wait(1000);
        cy.xpath(this.btn_ExportChat).should('be.visible').and('not.be.disabled');
        cy.wait(1000);
        return this;

    }

    public verifyShareButtonVisibility(){
        cy.wait(1000);
        cy.xpath(this.btn_ShareConversation).should('be.visible').and('not.be.disabled');
        cy.wait(1000);
        return this;

    }

    public closeInfoPanel(){
        cy.wait(2000);
        cy.xpath(this.btn_closeInfoPanel).click();
        cy.xpath(this.area_rightSidebar).should('not.exist');
        cy.wait(1000);
        return this;

    }

    public openInfoPanel(){
        cy.wait(2000);
        cy.xpath(this.btn_closeInfoPanel).click();
        cy.xpath(this.area_rightSidebar).should('be.visible');
        cy.wait(1000);
        return this;

    }

    public verifySidebarHidden(){
        cy.wait(1000);
        cy.xpath(this.area_rightSidebar).should('not.exist');
        cy.wait(1000);
        return this;
    }

    public verifySidebarVisible(){
        cy.wait(1000);
        cy.xpath(this.area_rightSidebar).should('be.visible');
        cy.wait(1000);
        return this;
    }

}