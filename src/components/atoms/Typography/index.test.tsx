import { render, screen } from "@testing-library/react";
import Typography from ".";
import { describe, it, expect } from "vitest";

describe("Typography atom", () => {
  it("renders text correctly", () => {
    render(<Typography variant="h4">Dashboard</Typography>);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});