Urban Routes Automated Testing

Project Description
-------------------
Urban Routes Automated Testing project aims to ensure the reliability and functionality of the Urban Routes web application. This project includes automated end-to-end tests that simulate user interactions, such as ordering a taxi, adding a credit card, and sending messages to the driver.

Technologies and Techniques Used
--------------------------------
- JavaScript: The primary programming language for writing tests.
- WebdriverIO: A powerful test framework for automating browser interactions.
- Mocha: A feature-rich JavaScript test framework running on Node.js.
- Chai: An assertion library for Node.js and the browser that can be paired with any JavaScript testing framework.
- VS Code: An open-source code editor used for developing the tests.
- Git: Version control system used to track changes in the project.

Instructions on How to Run the Tests
------------------------------------
1. Clone the repository:
   git clone https://github.com/username/urban-routes-automated-testing.git
   cd urban-routes-automated-testing

2. Install the dependencies:
   Ensure you have Node.js installed on your machine, then run:
   npm install

3. Run the tests:
   To run the tests, use the following command:
   npx wdio run wdio.conf.js
   This will execute all the tests defined in the test/specs folder.

4. Viewing the results:
   The test results will be displayed in the terminal. You can configure the test reporter in the wdio.conf.js file to generate reports in different formats.

Test Scenarios
--------------
Open Phone Number Modal
- Description: Test to ensure that the phone number modal opens correctly.
- Test File: test/specs/createAnOrder.e2e.js

Save Phone Number
- Description: Test to ensure that the phone number can be saved successfully.
- Test File: test/specs/createAnOrder.e2e.js

Select Supportive Plan
- Description: Test to select the Supportive plan and verify the selection.
- Test File: test/specs/createAnOrder.e2e.js

Add Credit Card and Activate Link Button
- Description: Test to add a credit card and activate the link button by simulating user interactions.
- Test File: test/specs/createAnOrder.e2e.js

Write a Message to the Driver
- Description: Test to write a message to the driver.
- Test File: test/specs/createAnOrder.e2e.js

Order Blanket and Handkerchiefs
- Description: Test to order a blanket and handkerchiefs.
- Test File: test/specs/createAnOrder.e2e.js

Order Two Ice Creams
- Description: Test to order two ice creams.
- Test File: test/specs/createAnOrder.e2e.js

Activate Car Search Modal
- Description: Test to activate the car search modal by pressing the smart button.
- Test File: test/specs/createAnOrder.e2e.js

Wait for Driver Info
- Description: Optional test to wait for the driver info to appear in the modal.
- Test File: test/specs/createAnOrder.e2e.js


