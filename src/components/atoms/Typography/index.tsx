import MuiTypography from "@mui/material/Typography";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2";
};

export default function Typography({
  children,
  variant = "body1",
}: Props) {
  return (
    <MuiTypography
      variant={variant}
      gutterBottom
    >
      {children}
    </MuiTypography>
  );
}