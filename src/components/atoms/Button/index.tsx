import MuiButton from "@mui/material/Button";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "contained" | "outlined" | "text";
};

export default function Button({
  children,
  onClick,
  variant = "contained",
}: Props) {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}