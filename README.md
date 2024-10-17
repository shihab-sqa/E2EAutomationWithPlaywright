
# Project Title

This project demonstrates how to automate an e-commerce website's checkout process using Playwright, a powerful framework for browser automation. It employs the Page Object Model (POM) design pattern, making the test scenarios more readable, maintainable, and reusable.

### The test flow includes:

* Navigating to the website.
* Logging in with valid credentials.
* Adding specific items to the cart.
* Verifying that the correct items have been added to the cart.
* Completing the checkout process by filling out a checkout form and confirming the order.
* This project serves as a starting point for anyone looking to understand Playwright's capabilities, including automated browser interactions, assertions, and test structuring using the POM approach.


## Appendix

### Playwright E-Commerce Checkout Automation
This repository contains an automated test scenario for the checkout process of an e-commerce website (Sauce Demo) using Playwright and the Page Object Model (POM) design pattern. This example demonstrates how to implement an end-to-end (E2E) test for adding items to the cart and completing a checkout process with login and item verification steps.

### Table of Contents
* Project Description
* Technologies
* Features
* Project Structure
* Installation
* Usage
* Test Scenario
* Running Tests
* Reporting and Debugging


## Tech Stack

### Playwright: A Node.js library to automate Chromium, Firefox, and WebKit browsers. Supports modern web testing.
### TypeScript: Strongly typed JavaScript that provides better tooling for large-scale applications.
### Page Object Model (POM): Design pattern that promotes maintainable and reusable code by organizing UI elements and actions as objects.


## Features

* Automated Login: Logs in using valid credentials (standard_user).
* Cart Operations: Adds multiple items to the shopping cart.
* Checkout Process: Automates the checkout process by filling in the customer’s details.
* Assertions: Verifies the correctness of the checkout process (ensures that the right items were added to the cart and the order was successfully placed).
* Headless Mode: Supports running tests in headless browsers for CI/CD pipelines.


## Project Structure
.
├── src
│   ├── pages
│   │   ├── LoginPage.ts           # Page Object for Login
│   │   ├── CartPage.ts            # Page Object for Cart
│   │   └── CheckoutPage.ts        # Page Object for Checkout
│   ├── tests
│   │   └── checkout.test.ts       # End-to-end checkout test
├── playwright.config.ts           # Playwright configuration file
├── package.json                   # Dependencies and npm scripts
└── README.md                      # Project documentation


### Pages
* LoginPage.ts: Handles login actions like filling in the username and password.
* CartPage.ts: Handles cart actions like adding items and navigating to the cart.
* CheckoutPage.ts: Handles checkout form actions and completing the purchase.


### Tests
* checkout.test.ts: The main test file that ties together all the actions across different pages to verify the complete checkout flow.
## Installation


    To run this project locally, follow the steps below:

* Clone the repository:

* git clone https://github.com/your-username/playwright-ecommerce-checkout.git
* cd playwright-ecommerce-checkout

### Install dependencies:

* npm install
* Install Playwright browsers:

* npx playwright install
## Usage/Examples



Once the project is set up, you can run the tests or add your own scenarios. The default test simulates a user logging in, adding items to the cart, and completing the checkout.

### Test Scenario
The current implementation covers the following test steps:

* Navigate to Sauce Demo.
* Log in as standard_user.
* Add two items to the cart: "Sauce Labs Backpack" and "Sauce Labs Bike Light."
* Verify that the correct items are in the cart.
* Complete the checkout process by entering the customer information (First Name, Last Name, Postal Code) and confirming the order.
## Running Tests

You can execute the tests using Playwright's test runner. By default, tests run in headless mode.

### Run the tests:

* npx playwright test
### Run the tests in headed mode (to visually observe the browser):
* npx playwright test --headed

### Filter tests: If you have multiple tests and only want to run the checkout test:


* npx playwright test src/tests/checkout.test.ts


## Reporting and Debugging

Playwright offers built-in reporting capabilities that capture screenshots and videos on test failure.

### View test report:

* npx playwright show-report
### Screenshots: Screenshots are captured on failure by default. You can find them in the Playwright report.

### Videos: Videos of test runs are also available when failures occur. You can adjust this behavior in the playwright.config.ts file.

### Debugging: You can debug by using Playwright’s built-in debug option:

* npx playwright test --debug
## Configuration

### playwright.config.ts
The default configuration provided supports:

* Headless mode: Run tests in the background.
* Retries: Tests will automatically retry once if they fail.
* Screenshots and Videos: Automatically captured on failure for debugging purposes.

#### You can modify these settings based on your needs.


import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
  },
  retries: 1,
});
