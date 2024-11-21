# **Welcome to Kittl's QA Assignment**

**Time for completion**: 1 week from the date of assignment.

**Evaluation Criteria**:

Evaluation will be based on both parts of the assessment, with equal weight given to Task 1 (Manual Part) and Task 2 (Automation Part). Evaluation will be done via a PR to the repo given to you for the assignment.

### **Assessment Overview**

The assessment consists of two main parts:

* **Task 1 (Manual)**: Create a detailed checklist for manual testing of a specific feature.  
* **Task 2 (Automation)**: Write automated test cases for the same feature.

**Instructions**:

Please carefully review the instructions and tasks below, as well as the details on accessing the functionality to be tested.

### **Task 1: Manual Testing Checklist**

* #### **Part 1**

  Familiarize yourself with the presented functional block. Based on your analysis, create a checklist of test scenarios that cover the functionality of the **"Pricing page"** as thoroughly as possible.  
  **Scope**: The checklist should focus on all key functionalities before the actual purchase step (no need to complete a purchase).

* #### **Part 2**

  Choose two checks from your checklist and write detailed test cases for them.  
  ***Note:*** There are no specific format requirements for the checklist, and there is no limit on the number of checks you can include.

### **Task 2: Automation**

#### **Part 1**

Think through the critical test cases of this tool.
Install the project by running `npm i` in terminal.
Implement 2 of chosen critical scenarios, setup GitHub actions and send us the link to the repository with your solution. 

**Requirements:**

* Tests can run in different browsers.  
* Tests capture screenshots on failure.  
* Tests run in parallel.  
* Test app is containerized.  
* README.md file contains the instructions on how to install and run tests.

#### **Part 2**

Having automated test - rocks! But what's better is to have something that runs them... automatically. 

As we are already using GitHub, it would make sense to use [GitHub actions](https://docs.github.com/en/actions)

Please make sure that the action runs on the following conditions:
1. Manually - it should be possible to trigger test at any moment through github ui
2. Daily - sometime in the afternoon will be fine
3. On change - every time code for test changes it would be nice to run it, to make sure that it works!

**Small Note:** you will need to add code directly to the `main` branch to test this part.

### **Access Instructions**

Environment: [**kittl.com**](https://kittl.com/).

Pricing page: **[pricing](https://www.kittl.com/pricing).**

More detailed information about Subscriptions can be found on the following page: https://www.kittl.com/help/subscription.
