import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "../../atoms/Typography";

import NavbarLinks from "../../molecules/NavbarLinks";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">
          LearnHub
        </Typography>

        <NavbarLinks />
      </Toolbar>
    </AppBar>
  );
}