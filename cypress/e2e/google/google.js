import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open Google page", () => {
  cy.visit("https://google.com");
});

Then("I see Google in the title", () => {
  cy.title().should("include", "Google");
});
