import React from "react";
import nock from "nock";
import "@testing-library/jest-dom";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import AddResultsAdmin from "./AddResults";

test("admin panel loads and has form", () => {
  render(<AddResultsAdmin />);

  const form = screen.getByRole("form");

  expect(form).toBeInTheDocument();
});

test("can pick a specific team", () => {
  render(<AddResultsAdmin />);

  const teamChoice = screen.getByRole("combobox", { name: "Select Team" });
  fireEvent.change(teamChoice, {
    target: { value: "Shardlow St James" },
  });

  expect(teamChoice).toHaveValue("Shardlow St James");
});

// First simulated test using Nock, from chatGPT just to get the first one down and understand a little more
describe("Team selection test", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("updates selectedTeam and teamList state when a team is selected", async () => {
    // Mock the API call
    const teams = [
      { id: 4, name: "Shardlow St James" },
      { id: 5, name: "Shardlow U15's" },
      { id: 6, name: "Shardlow Vets" },
    ];
    nock("http://example.com").get("/api./admin").reply(200, teams);

    // Render Component
    render(<AddResultsAdmin />);

    // Simulate selecting a team
    const teamSelect = screen.getByLabelText("Select Team");
    fireEvent.change(teamSelect, { target: { value: teams[0].name } });

    // Wait for component to update
    await waitFor(() => {
      // Check Team State
      expect(teamSelect).toHaveValue("Shardlow St James");
    });

    //   Check team list state
    await waitFor(() => {
      const options = screen.getAllByRole("option");
      const teamValue = options.find(
        (option) => option.textContent === "Shardlow Vets"
      );
      expect(teamValue).toBeInTheDocument();
    });
  });
});
