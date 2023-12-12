import React from "react";
import Homepage from "../../src/Components/Pages/Homepage/Homepage";

describe("<Homepage />", () => {
  it("mounts", () => {
    cy.mount(<Homepage />);
    cy.get("h1").should("have.text", "Shardlow St James FC");
  });
});
