@registration
Feature: Registration Scenarios

As a student
  I would like to add the student Membership to shopping basket
  So that I can register myself to AAT

  Scenario: Registering as student to student membership
    Given I'm a student 
    And want to start my registration process
    When I'm on register page
    And I added student membership course to basket
    When I click the shopping basket 
    Then I should see the added course in shopping basket
 
  