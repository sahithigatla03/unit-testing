import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CourseCard from ".";
import { describe, it, expect } from "vitest";

const course = {
  id: "react",
  title: "React Basics",
  level: "Beginner",
  duration: "4 weeks",
  description: "Learn components, props, state, and hooks.",
};

describe("CourseCard organism", () => {
  it("renders course information", () => {
    render(
      <MemoryRouter>
        <CourseCard course={course} />
      </MemoryRouter>
    );

    expect(screen.getByText(/react basics/i)).toBeInTheDocument();
    expect(screen.getByText(/beginner/i)).toBeInTheDocument();
    expect(screen.getByText(/4 weeks/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view details/i })).toBeInTheDocument();
  });
});