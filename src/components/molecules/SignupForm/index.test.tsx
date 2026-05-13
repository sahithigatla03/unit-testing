import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe,expect,it,vi } from "vitest";

import SignupForm from ".";

describe("SignupForm molecule", () => {
  it("renders name, email, password and signup button", () => {
    render(<SignupForm onSignup={() => {}} />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /signup/i })).toBeInTheDocument();
  });

  it("calls onSignup when signup button is clicked", async () => {
    const onSignup = vi.fn();

    render(<SignupForm onSignup={onSignup} />);

    await userEvent.click(screen.getByRole("button", { name: /signup/i }));

    expect(onSignup).toHaveBeenCalledTimes(1);
  });
});