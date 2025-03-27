import { ChatAssistant } from "../../../page-objects-and-services/page-objects/ChatAssistant";
import { Home } from "../../../page-objects-and-services/page-objects/Home";
import { Login } from "../../../page-objects-and-services/page-objects/login";

const home = new Home();
const login = new Login();
const chatAssistant = new ChatAssistant();

describe("policy agent test suite", () => {

  const policyAgent = [
    {
      TestCase:
        "Questions should be answered regarding general questions from the policy. [Expense Reimbursement Policy - General Question 01]",
      Test_Case_ID: "TC_002",
      TestData: "What is the purpose of the expense reimbursement policy?",
      expectedResponse:
        "What is the purpose of the expense reimbursement policy? Spend ",
     
        
    },

    {
      TestCase:
        "Questions should be answered regarding general questions from the policy. [Expense Reimbursement Policy - General Question 02]",
      Test_Case_ID: "TC_003",
      TestData: "Who does this policy apply to? ",
      expectedResponse:
        "Question: Who does this policy apply to?",
      

    },
    {
      TestCase:
        "Questions should be answered regarding general questions from the policy. [Expense Reimbursement Policy - General Question 03]",
      Test_Case_ID: "TC_004",
      TestData: "What types of expenses are covered under this policy?",
      expectedResponse:
        "Question: What types of expenses are covered under this policy?",
     
    },

    {
      TestCase:
        "Questions should be answered regarding general questions from the policy. [Expense Reimbursement Policy - General Question 04]",
      Test_Case_ID: "TC_005",
      TestData: "What is the submission deadline for expense reports?",
      expectedResponse:
        "Question: What is the submission deadline for expense reports?",
     
    },

    {
      TestCase:
        "Questions should be answered regarding general questions from the policy. [Expense Reimbursement Policy - General Question 05]",
      Test_Case_ID: "TC_006",
      TestData: "What happens if an employee does not comply with the policy?",
      expectedResponse:
        "Question: What happens if an employee does not comply with the policy?",
     
    },

    {
      TestCase:
        "Questions should be answered regarding general questions from the policy. [Expense Reimbursement Policy - General Question 06]",
      Test_Case_ID: "TC_007",
      TestData: "How long does it take for a reimbursement to be processed?",
      expectedResponse:
        "Question: How long does it take for a reimbursement to be processed?",
      
    },

    {
      TestCase:
        "Questions should be answered regarding general questions from the policy. [Expense Reimbursement Policy - General Question 07]",
      Test_Case_ID: "TC_008",
      TestData: "What documentation is required for reimbursement?",
      expectedResponse:
        "Question: What documentation is required for reimbursement?",
      
    },

    {
      TestCase:
        "Questions should be answered regarding general questions from the policy. [Expense Reimbursement Policy - General Question 08]",
      Test_Case_ID: "TC_009",
      TestData: "Can employees submit expenses without receipts?",
      expectedResponse:
        "Question: Can employees submit expenses without receipts?",
    
    },

    {
      TestCase:
        "Questions should be answered regarding general questions from the policy. [Expense Reimbursement Policy - General Question 09]",
      Test_Case_ID: "TC_010",
      TestData:
        "Are there consequences for submitting fraudulent expense claims?",
      expectedResponse:
        "Question: Are there consequences for submitting fraudulent expense claims?",
      
    },

    {
      TestCase:
        "Questions should be answered regarding general questions from the policy. [Expense Reimbursement Policy - General Question 10]",
      Test_Case_ID: "TC_011",
      TestData: "How often is this policy reviewed and updated?",
      expectedResponse:
        "Question: How often is this policy reviewed and updated?",
    
    },

    {
      TestCase:
        "Questions should be answered regarding travel expenses questions from the policy. [Expense Reimbursement Policy - Travel Expenses Question 01]",
      Test_Case_ID: "TC_012",
      TestData: "What class of airfare is allowed for executives?",
      expectedResponse:
        "Question: What class of airfare is allowed for executives?",
      
    },

    {
      TestCase:
        "Questions should be answered regarding travel expenses questions from the policy. [Expense Reimbursement Policy - Travel Expenses Question 02]",
      Test_Case_ID: "TC_013",
      TestData:
        "Can managers travel in business class for flights over 5 hours?",
        expectedResponse:
        "Question: Can managers travel in business class for flights over 5 hours?",

    },
    {
      TestCase:
        "Questions should be answered regarding travel expenses questions from the policy. [Expense Reimbursement Policy - Travel Expenses Question 03]",
      Test_Case_ID: "TC_014",
      TestData: "Do staff employees need pre-approval for booking flights?",
      expectedResponse:
        "Question: Do staff employees need pre-approval for booking flights?",
      
    },
    {
      TestCase:
        "Questions should be answered regarding travel expenses questions from the policy. [Expense Reimbursement Policy - Travel Expenses Question 04]",
      Test_Case_ID: "TC_015",
      TestData:
        "Are ride-sharing services covered under transportation expenses?",
        expectedResponse:
        "Question: Are ride-sharing services covered under transportation expenses?",
   
    },
    {
      TestCase:
        "Questions should be answered regarding travel expenses questions from the policy. [Expense Reimbursement Policy - Travel Expenses Question 05]",
      Test_Case_ID: "TC_016",
      TestData: "Is pre-approval required for ground transportation?",
      expectedResponse:
        "Question: Is pre-approval required for ground transportation?",
     
    },
    {
      TestCase:
        "Questions should be answered regarding travel expenses questions from the policy. [Expense Reimbursement Policy - Travel Expenses Question 06]",
      Test_Case_ID: "TC_017",
      TestData:
        "How much can a Grade 2 employee claim for daily incidental expenses?",
      expectedResponse:
        "Question: How much can a Grade 2 employee claim for daily incidental expenses?",
      
    },
    {
      TestCase:
        "Questions should be answered regarding travel expenses questions from the policy. [Expense Reimbursement Policy - Travel Expenses Question 07]",
      Test_Case_ID: "TC_018",
      TestData: "Can employees book luxury rental cars for business travel?",
      expectedResponse:
        "Question: Can employees book luxury rental cars for business travel?",
      
    },
    {
      TestCase:
        "Questions should be answered regarding travel expenses questions from the policy. [Expense Reimbursement Policy - Travel Expenses Question 08]",
      Test_Case_ID: "TC_019",
      TestData: "What is the maximum accommodation allowance for executives?",
      expectedResponse:
        "Question: What is the maximum accommodation allowance for executives?",
    },
    {
      TestCase:
        "Questions should be answered regarding travel expenses questions from the policy. [Expense Reimbursement Policy - Travel Expenses Question 09]",
      Test_Case_ID: "TC_020",
      TestData:
        "If a Grade 3 employee needs to exceed the hotel allowance, what should they do?",
      
      expectedResponse:
        "Question: If a Grade 3 employee needs to exceed the hotel allowance, what should they do?",
    },
    {
      TestCase:
        "Questions should be answered regarding travel expenses questions from the policy. [Expense Reimbursement Policy - Travel Expenses Question 10]",
      Test_Case_ID: "TC_021",
      TestData: "Who approves travel expenses for HR staff?",
      expectedResponse:
        "Question: Who approves travel expenses for HR staff?",
    },

    {
      TestCase:
        "Questions should be answered regarding meals & entertainment expenses questions from the policy. [Expense Reimbursement Policy - Meals & Entertainment Question 01]",
      Test_Case_ID: "TC_022",
      TestData: "What is the daily meal allowance for Grade 1 employees?",
      expectedResponse:
        "What is the daily meal allowance for Grade 1 employees?", 
    },

    {
      TestCase:
        "Questions should be answered regarding meals & entertainment expenses questions from the policy. [Expense Reimbursement Policy - Meals & Entertainment Question 02]",
      Test_Case_ID: "TC_023",
      TestData: "Can a Grade 2 employee exceed their daily meal budget?",
      expectedResponse:
        "Question: Can a Grade 2 employee exceed their daily meal budget?",
    },

    {
      TestCase:
        "Questions should be answered regarding meals & entertainment expenses questions from the policy. [Expense Reimbursement Policy - Meals & Entertainment Question 03]",
      Test_Case_ID: "TC_024",
      TestData:
        "What is the maximum budget for client entertainment for Grade 2 employees?",
      
      expectedResponse:
        "Question: What is the maximum budget for client entertainment for Grade 2 employees?",
    },

    {
      TestCase:
        "Questions should be answered regarding meals & entertainment expenses questions from the policy. [Expense Reimbursement Policy - Meals & Entertainment Question 04]",
      Test_Case_ID: "TC_025",
      TestData:
        "Do all grades need pre-approval for client entertainment expenses?",
      
      expectedResponse:
        "Question: Do all grades need pre-approval for client entertainment expenses?",
    },
    {
      TestCase:
        "Questions should be answered regarding meals & entertainment expenses questions from the policy. [Expense Reimbursement Policy - Meals & Entertainment Question 05]",
      Test_Case_ID: "TC_026",
      TestData:
        "What is the per-person spending cap for client entertainment for general staff?",
      
      expectedResponse:
        "Question: What is the per-person spending cap for client entertainment for general staff?",
      
      },

    {
      TestCase:
        "Questions should be answered regarding meals & entertainment expenses questions from the policy. [Expense Reimbursement Policy - Meals & Entertainment Question 06]",
      Test_Case_ID: "TC_027",
      TestData: "Can an employee claim reimbursement for personal meals?",
      
      expectedResponse:
        "Question: Can an employee claim reimbursement for personal meals?",
      },

    {
      TestCase:
        "Questions should be answered regarding meals & entertainment expenses questions from the policy. [Expense Reimbursement Policy - Meals & Entertainment Question 07]",
      Test_Case_ID: "TC_028",
      TestData:
        "If an employee spends more than the meal allowance, will the extra amount be reimbursed?",
      
      expectedResponse:
        "Question: If an employee spends more than the meal allowance, will the extra amount be reimbursed?",

      },

    {
      TestCase:
        "Questions should be answered regarding meals & entertainment expenses questions from the policy. [Expense Reimbursement Policy - Meals & Entertainment Question 08]",
      Test_Case_ID: "TC_029",
      TestData: "How are meal expenses tracked for compliance?",
      
      expectedResponse:
        "Question: How are meal expenses tracked for compliance?",

      },

    {
      TestCase:
        "Questions should be answered regarding meals & entertainment expenses questions from the policy. [Expense Reimbursement Policy - Meals & Entertainment Question 09]",
      Test_Case_ID: "TC_030",
      TestData: "Are coffee shop visits reimbursable under meal expenses?",
      
      expectedResponse:
        "Are coffee shop visits reimbursable under meal expenses?",
      },

    {
      TestCase:
        "Questions should be answered regarding meals & entertainment expenses questions from the policy. [Expense Reimbursement Policy - Meals & Entertainment Question 10]",
      Test_Case_ID: "TC_031",
      TestData: "Can employees claim meal expenses when working remotely?",
      
      expectedResponse:
        "Question: Can employees claim meal expenses when working remotely?",
      },


    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 01]",
      Test_Case_ID: "TC_032",
      TestData: "What's my budget for travel expenses?",
      
      expectedResponse:
        "Question: What's my budget for travel expenses?",
      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 02]",
      Test_Case_ID: "TC_033",
      TestData: "How much can I spend on flights?",
     
      expectedResponse:
        "Question: How much can I spend on flights?",
      },
    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 03]",
      Test_Case_ID: "TC_034",
      TestData: "Do I need permission to book a plane ticket?",
      
      expectedResponse:
        "Question: Do I need permission to book a plane ticket?",
     },
    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 04]",
      Test_Case_ID: "TC_035",
      TestData: "Am I allowed to take a taxi for work trips?",
      
      expectedResponse:
        "Question: Am I allowed to take a taxi for work trips?",
      },
    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 05]",
      Test_Case_ID: "TC_036",
      TestData: "What’s the max amount I can claim for food per day?",
      
      expectedResponse:
        "Question: What’s the max amount I can claim for food per day?",

      },
    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 06]",
      Test_Case_ID: "TC_037",
      TestData: "How do I get paid back for office supplies?",
      
      expectedResponse:
        "Question: How do I get paid back for office supplies?",
      },
    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 07]",
      Test_Case_ID: "TC_038",
      TestData: "Who do I ask if I need more money for meals?",
      
      expectedResponse:
        "Question: Who do I ask if I need more money for meals?",
      },
    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 08]",
      Test_Case_ID: "TC_039",
      TestData: "Can I buy a work laptop and get reimbursed?",
      
      expectedResponse:
        "Question: Can I buy a work laptop and get reimbursed?",

      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 09]",
      Test_Case_ID: "TC_040",
      TestData: "Will my Uber ride to the airport be covered?",
      expectedResponse:
        "Question: Will my Uber ride to the airport be covered?", 
      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 10]",
      Test_Case_ID: "TC_041",
      TestData: "Can I take my spouse on a business trip and claim expenses?",
      
      expectedResponse:
        "Question: Can I take my spouse on a business trip and claim expenses?",
      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 11]",
      Test_Case_ID: "TC_042",
      TestData: "Is it okay to buy stationery on my own and request a refund?",
      
      expectedResponse:
        "Question: Is it okay to buy stationery on my own and request a refund?",

      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 12]",
      Test_Case_ID: "TC_043",
      TestData: "How do I send my reimbursement request?",
      
      expectedResponse:
        "Question: How do I send my reimbursement request?",

      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 13]",
      Test_Case_ID: "TC_044",
      TestData: "Can I buy a premium hotel room and claim the cost?",
     
      expectedResponse: 
        "Question: Can I buy a premium hotel room and claim the cost?",
      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 14]",
      Test_Case_ID: "TC_045",
      TestData: "Do I need receipts for all my expenses?",
      
      expectedResponse:
        "Question: Do I need receipts for all my expenses?",
      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 15]",
      Test_Case_ID: "TC_046",
      TestData: "Is there a deadline to submit expenses?",
      
      expectedResponse:
        "Question: Is there a deadline to submit expenses?",
      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 16]",
      Test_Case_ID: "TC_047",
      TestData: "Can I request money for daycare while I travel?",
      
      expectedResponse:
        "Question: Can I request money for daycare while I travel?",
      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 17]",
      Test_Case_ID: "TC_048",
      TestData: "Will my internet bill be covered under work expenses?",
      
      expectedResponse:
        "Question: Will my internet bill be covered under work expenses?",
      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 18]",
      Test_Case_ID: "TC_049",
      TestData: "Who should approve my hotel booking?",
      
      expectedResponse:
        "Question: Who should approve my hotel booking?",
      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 19]",
      Test_Case_ID: "TC_050",
      TestData: "How much can I spend on a business dinner?",
      
      expectedResponse:
        "Question: How much can I spend on a business dinner?",
      },

    {
      TestCase:
        "Questions should be answered regarding NLP variability testing questions from the policy. [Expense Reimbursement Policy - NLP Variability Testing Question 20]",
      Test_Case_ID: "TC_051",
      TestData: "What happens if my reimbursement is rejected?",
      
      expectedResponse:
        "Question: What happens if my reimbursement is rejected?",
      },


    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 01]",
      Test_Case_ID: "TC_052",
      TestData: "I lost my receipts. Can I still get reimbursed?",
      
      expectedResponse :
         "Question: I lost my receipts. Can I still get reimbursed?",
      },


    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 02]",
      Test_Case_ID: "TC_053",
      TestData: "My flight got canceled. Can I get a refund?",
      
      expectedResponse :
        "Question: My flight got canceled. Can I get a refund?",
      },

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 03]",
      Test_Case_ID: "TC_054",
      TestData: "I spent $500 on a client dinner. Can I claim it?",
      
      expectedResponse :
        "Question: I spent $500 on a client dinner. Can I claim it?",
      },

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 04]",
      Test_Case_ID: "TC_055",
      TestData: "What if I accidentally book a hotel above my limit?",
      
      expectedResponse :
        "Question: What if I accidentally book a hotel above my limit?",
      },

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 05]",
      Test_Case_ID: "TC_056",
      TestData: "Can I claim expenses for a vacation if I take client calls?",
      
      expectedResponse :
        "Question: Can I claim expenses for a vacation if I take client calls?",
    
      },  

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 06]",
      Test_Case_ID: "TC_057",
      TestData:
        "I traveled with my pet. Will the company cover the pet’s expenses?",
      
      expectedResponse :
        "Question: I traveled with my pet. Will the company cover the pet’s expenses?",
      },


    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 07]",
      Test_Case_ID: "TC_058",
      TestData: "I tipped a taxi driver $50. Can I get reimbursed?",
      
      expectedResponse :
        "Question: I tipped a taxi driver $50. Can I get reimbursed?",
      },

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 08]",
      Test_Case_ID: "TC_059",
      TestData: "Can I claim personal purchases if I use them for work?",
      
      expectedResponse :
        "Question: Can I claim personal purchases if I use them for work?",
      },

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 09]",
      Test_Case_ID: "TC_060",
      TestData: "What happens if my request gets denied?",
      
      expectedResponse :
        "Question: What happens if my request gets denied?",

    },

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 10]",
      Test_Case_ID: "TC_061",
      TestData: "I submitted my expense late. Will I still get reimbursed?",
      
      expectedResponse :
        "Question: I submitted my expense late. Will I still get reimbursed?",
      },  

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 11]",
      Test_Case_ID: "TC_062",
      TestData: "Can I submit expenses from last year?",
      
      expectedResponse :
        "Question: Can I submit expenses from last year?",
      },


    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 12]",
      Test_Case_ID: "TC_063",
      TestData: "What should I do if the system rejects my claim by mistake?",
      
      expectedResponse :
        "Question: What should I do if the system rejects my claim by mistake?",
      },  

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 13]",
      Test_Case_ID: "TC_064",
      TestData: "How do I appeal a reimbursement decision?",
      
      expectedResponse :
        "Question: How do I appeal a reimbursement decision?",
      },

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 14]",
      Test_Case_ID: "TC_065",
      TestData: "Who decides if my expense is “reasonable”?",
      
      expectedResponse :
        "Question: Who decides if my expense is “reasonable”?",
      },

    {
      TestCase:
        "Questions should be answered regarding exception handling questions from the policy. [Expense Reimbursement Policy - Exception Handling Question 15]",
      Test_Case_ID: "TC_066",
      TestData: "Can I transfer my unused budget to next month?",
      
      expectedResponse :
        "Question: Can I transfer my unused budget to next month?",
      },

  ];

  beforeEach(() => {
    login.createLoginSession();
    cy.visit("https://assistant-dev1.redowl.io");
  });

  after(() => {
    home.logOut();
});



  policyAgent.forEach(
    ({ TestCase, Test_Case_ID, TestData, expectedResponse ,  }) => {

      it(`${TestCase} - ${Test_Case_ID} : Policy Agent`, () => {

        
        home.clickAgentCard("Policy Agent");
          
        cy.wait(3000);
        chatAssistant.typeMessage(TestData).sendMessage();
        cy.wait(5000);

        chatAssistant.validateResponse(expectedResponse);
       
      
      });
    }
  );
  
});
