Feature: Login
  Scenario: Use logs in with valid credentials
    Given user is on login page
    When user enters valid email and password
    And clicks login button
    Then user should be redirected to dashboard