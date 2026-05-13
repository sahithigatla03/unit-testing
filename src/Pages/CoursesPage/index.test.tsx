import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CoursesPage from ".";

describe("CoursesPage", () => {
  it("renders all courses", () => {
    render(
      <MemoryRouter>
        <CoursesPage />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/courses/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/react basics/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/typescript/i)
    ).toBeInTheDocument();
  });
});