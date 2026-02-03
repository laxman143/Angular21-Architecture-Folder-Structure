Feature: Products navigation from left panel

  Background:
    Given user is logged in 
    And user is on dashboard page

  Scenario: View products list from left panel
    When user clicks on Products menu from left panel
    Then user should be redirected to products page
    And product list should be displayed
    And at least one product card should be visible
    