# **Kittl Automation Project**

## **Overview**
This project automates critical scenarios for Kittl's Pricing Page using **Playwright**. The tests are designed to ensure functionality across multiple browsers and can run in a containerized environment. For the manual test scenarios, please see [manual-tests.md](./MANUAL-TESTS.md).


---
## Code Structure
This project follows the Page Object Model (POM) design pattern to organize test code for better maintainability and reusability. Selectors in the page object classes are defined as functions instead of static variables. This approach ensures that the elements are fetched from the DOM only when the method is called, and not when the class is instantiated, reduces unnecessary DOM queries, and ensures that the latest state of the DOM is always used, which is especially useful for elements that may change dynamically or load asynchronously.

---

## Getting Started

### Prerequisites

### Install the dependencies

Run the following command to install all dependencies in playwright folder:

```bash
npm install
npx playwright install
```
### **Environment Variables**

Create a `.env` file in the root directory to provide test credentials:
```env
EMAIL=nadya0704@gmail.com
PASSWORD=e3#6heR$Aq$LG.d
```    
---

## Running Tests
### Run All Tests
Run all tests in the project:
```bash
npx playwright test
```
### Run Specific Test
To run a specific test by name:  

```bash
npx playwright test --grep "Navigate to pricing page and log in to select Pro Plan"
```

### Run Tests in Headed Mode
Run all tests in a visible browser:
```bash
npx playwright test --headed 
```
### Run Tests in a Specific Browser
```bash
npx playwright test --project=chromium
```
---

## Generate and View Reports
Test results (including screenshots and videos on failure) are available in the generated Playwright HTML report. To generate and open the HTML report after test run:
```bash
npx playwright show-report 
```
---

## Dockerized Testing
### Docker Image
This project uses the official Playwright Docker image, ensure you pull it:
```bash
docker pull mcr.microsoft.com/playwright:v1.49.0-jammy 
```
###  Run Tests in Docker
Run the tests inside the container:
```bash
docker run -v $(pwd):/app -w /app --rm mcr.microsoft.com/playwright:v1.49.0-jammy npx playwright test
```
---

## GitHub Actions Workflow

The Playwright tests in this repository are automated to run using GitHub Actions. The workflow is designed to run tests in a Dockerized environment with the following key configurations:

### Workflow Configuration
- **Workflow Triggers:**
    - Manually via GitHub Actions UI.
    - On a daily schedule at 14:00 UTC.
    - On every push to the `main` branch.
- **Environment:**
    - Uses the official Playwright Docker image: `mcr.microsoft.com/playwright:v1.49.0-jammy`.

### How to View the Report
- Download the `playwright-report` artifact from the workflow run page, after the run has completed.
- Extract the artifact locally and open the `index.html` file in a browser to view the test results.

---

## Supported Browsers and Parallel Execution

### Browsers
Tests are executed on the following browsers:
- **Chromium** 
- **Firefox**
- **Webkit** 

These configurations ensure cross-browser compatibility.

### Parallel Execution
Tests run in parallel for faster execution:
- **CI**: Configured with 2 workers.
- **Local**: Optimal workers are determined automatically based on system resources.


---

## Known Limitations
**No Secrets Used**: Due to administrative restrictions, sensitive information like the `EMAIL` and `PASSWORD` could not be stored securely in GitHub Secrets. These are currently hardcoded into the workflow file.

--- 

## Potential Improvements
1. **Secrets Management**:
    - Store sensitive information like `EMAIL` and `PASSWORD` in GitHub Secrets instead of hardcoding them in the workflow file.

2. **Cookies Banner Behaviour**:
   - Investigate and address the inconsistent behavior of the cookies banner within the Docker container. While Docker ensures an isolated environment, there were cases where the banner was not displayed for every browser session as expected. This could indicate that some sessions are not completely fresh or that the application server behaves differently under certain conditions. Potential fixes include explicitly clearing cookies or storage before every test run.  

---


