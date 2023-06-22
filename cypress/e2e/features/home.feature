Feature: As a valid user I want to access the home page
  Scenario: visiting the home page
    When I visit home page
    Then I should see the title 'Welcome to Atlas'