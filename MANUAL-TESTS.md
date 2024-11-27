## **Manual Testing Checklist**

### Context:

The checklist focuses on key functionalities like navigation, plan descriptions, subscription modal and its behaviour and plan comparison, as these are crucial to the user’s ability to understand and choose a plan. I chose to distinguish between logged-in and guest users, due to the different entry points for each. I covered the Happy Path scenarios, but negative scenarios should of course complete the testing coverage. Some of the test cases can be covered on the unit test level, while others could be verified by contract tests. E2E test will include navigation and functionality combined, from different entry points, depending on whether the user logs-in first or tries first to trigger plan selection.    

### Pricing Page Entry Points:
#### Logged-in User:
* Navigate to pricing page from sidebar `subsribtion` section
* Navigate to pricing page from sidebar `credits` section
* Navigate to pricing page from sidebar `account setting` section
* Navigate to pricing page from header `company`/`pricing` section

#### Logged-out User:
* Navigate to pricing page from header `plans` section
* Navigate to pricing page from header `company`/`pricing` section
* Verify plan selection triggers login 

### Pricing Page Functionalities:
* Verify current/your plan is displayed correct
* Verify default recommended plan selection
* Verify all plans are displayed
* Verify each plan includes key information
* Verify monthly and yearly toggle functionality
* Verify plan comparison appearance and functionality
* Verify navigation to subscription modal from each plan CTA 
* Verify subscription modal plan selection Pro/Expert and yearly/monthly 
* Verify all elements exist and present correct info
* Verify CTA state and functionality 
* Close subscription modal 

### E2E Flows: 
#### Logged-in User:
* User can successfully navigate from home page to pricing page, and trigger a Free Plan
* User can successfully navigate from home page to pricing page, and trigger a Pro Plan 
* User can successfully navigate from home page to pricing page, and trigger an Expert Plan 
#### Logged-out User:
* Navigate to pricing page and Log in to select Free Plan
* Navigate to pricing page and log in to select Pro Plan
* Navigate to pricing page and log in to select Expert Plan

### Potential Improvements and Points for Consideration 
* The flows above can be extended to cover different combinations of: first login then navigate to pricing page, or first navigate to pricing page and then login, as well as plan purchase start with different entry points (as described above).
* No account/Anonymous User should be tested as well to verify proper integration of account creation process, and then navigation to pricing page.
* Error handling during plan purchase process should be tested thoroughly.
* The UI and functionalities above should be verified on different platforms (tablets/mobile devices).

## **Detailed Testing Scenarios**

I chose to write the detailed test scenarios in Gherkin syntax for best clarity and efficiency:

#### 1. Navigate to Pricing Page and Log In to Select Pro Plan
GIVEN I am on https://www.kittl.com/  
AND I accept the cookies

WHEN I press `Plans`  
AND I press `Get Pro`  
AND I sign in 
- press `Sign In`
- fill out my credentials
- press the submit button  

THEN I should see 
 - Subscription modal with `Upgrade to Pro plan` title
 - Enabled CTA with the text `proceed to checkout`

#### 2. Navigate to pricing page and verify all plans are displayed
GIVEN I am on https://www.kittl.com/  
AND I accept the cookies

WHEN I press `Plans`  
THEN I should see  
* plan offer with the title `Free`
* plan offer with the title `Pro`
* plan offer with the title `Expert`