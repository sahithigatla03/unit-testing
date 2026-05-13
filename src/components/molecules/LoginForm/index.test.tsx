import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import LoginForm from ".";

describe("LoginForm molecule", () => {
  it("renders email, password and login button", () => {
    render(<LoginForm onLogin={() => {}} />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("calls onLogin when login button is clicked", async () => {
    const onLogin = vi.fn();

    render(<LoginForm onLogin={onLogin} />);

    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(onLogin).toHaveBeenCalledTimes(1);
  });
});