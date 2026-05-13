import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import {
  Outlet,
  useLocation,
} from "react-router-dom";

import Navbar from "../../components/organisms/Navbar";

export default function MainLayout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Container maxWidth="lg">
        <Box sx={{ mt: hideNavbar ? 0 : 4 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}