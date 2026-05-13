import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NavbarLinks from ".";
import { describe, it, expect } from "vitest";

describe("NavbarLinks molecule", () => {
  it("renders all navigation links", () => {
    render(
      <MemoryRouter>
        <NavbarLinks />
      </MemoryRouter>
    );

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/courses/i)).toBeInTheDocument();
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });
});