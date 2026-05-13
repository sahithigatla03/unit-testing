import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import Typography from "../../components/atoms/Typography";

import LoginForm from "../../components/molecules/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 10 }}>
        <Typography variant="h4">
          Login
        </Typography>

        <Typography>
          Welcome back. Continue your learning journey.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <LoginForm
            onLogin={() =>
              navigate("/dashboard")
            }
          />
        </Box>
      </Paper>
    </Container>
  );
}