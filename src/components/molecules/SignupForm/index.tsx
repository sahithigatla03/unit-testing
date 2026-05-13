import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import Button from "../../atoms/Button";

type Props = {
  onSignup: () => void;
};

export default function SignupForm({
  onSignup,
}: Props) {
  return (
    <Stack spacing={2}>
      <TextField
        label="Full Name"
        fullWidth
      />

      <TextField
        label="Email"
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
      />

      <Button onClick={onSignup}>
        Signup
      </Button>
    </Stack>
  );
}