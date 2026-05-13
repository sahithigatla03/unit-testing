import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MainLayout from ".";

describe("MainLayout", () => {
  it("renders navbar links", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/learnhub/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /dashboard/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /courses/i })
    ).toBeInTheDocument();
  });
});