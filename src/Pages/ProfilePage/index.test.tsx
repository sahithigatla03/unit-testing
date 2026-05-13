import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProfilePage from ".";

describe("ProfilePage", () => {
  it("renders profile page", () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /profile/i,
      })
    ).toBeInTheDocument();
  });
});