import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import Button from ".";

describe("Button atom", () => {
  it("renders button text", () => {
    render(<Button>Login</Button>);

    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Login</Button>);

    await userEvent.click(
      screen.getByRole("button", { name: /login/i })
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});