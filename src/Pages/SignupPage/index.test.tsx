import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import SignupPage from ".";
import { describe, it, expect } from "vitest";

describe("SignupPage", () => {
  it("renders signup page correctly", () => {
    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /signup/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /signup/i,
      })
    ).toBeInTheDocument();
  });
});