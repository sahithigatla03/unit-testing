import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import DashboardPage from ".";

describe("DashboardPage", () => {
  it("renders dashboard page", () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/student dashboard/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/available courses/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/overall progress/i)
    ).toBeInTheDocument();
  });
});