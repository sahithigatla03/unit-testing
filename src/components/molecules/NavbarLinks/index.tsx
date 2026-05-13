import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

import Button from "../../atoms/Button";

export default function NavbarLinks() {
  return (
    <Stack direction="row" spacing={2}>
      <Button>
        <Link to="/dashboard">
          Dashboard
        </Link>
      </Button>

      <Button>
        <Link to="/courses">
          Courses
        </Link>
      </Button>

      <Button>
        <Link to="/profile">
          Profile
        </Link>
      </Button>

      <Button>
        <Link to="/login">
          Logout
        </Link>
      </Button>
    </Stack>
  );
}