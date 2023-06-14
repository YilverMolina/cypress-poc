import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit home page", () => {
  cy.visit("http://localhost:4200/home");
});

Then("I should see the title 'Welcome to Atlas'", () => {
    cy.get('h1').contains('Welcome to Atlas');
});