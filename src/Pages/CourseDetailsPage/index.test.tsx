import { render, screen } from "@testing-library/react";
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";

import CourseDetailsPage from ".";

describe("CourseDetailsPage", () => {
  it("renders selected course details", () => {
    render(
      <MemoryRouter initialEntries={["/courses/react"]}>
        <Routes>
          <Route
            path="/courses/:courseId"
            element={<CourseDetailsPage />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText(/react basics/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/beginner/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/4 weeks/i)
    ).toBeInTheDocument();
  });
});