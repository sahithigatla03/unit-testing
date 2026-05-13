import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";

import Typography from "../../components/atoms/Typography";

import SignupForm from "../../components/molecules/SignupForm";

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 10 }}>
        <Typography variant="h4">
          Signup
        </Typography>

        <Typography>
          Create your student account.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <SignupForm
            onSignup={() =>
              navigate("/dashboard")
            }
          />
        </Box>
      </Paper>
    </Container>
  );
}