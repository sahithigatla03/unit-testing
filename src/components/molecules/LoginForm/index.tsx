import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import Button from "../../atoms/Button";

type Props = {
  onLogin: () => void;
};

export default function LoginForm({
  onLogin,
}: Props) {
  return (
    <Stack spacing={2}>
      <TextField
        label="Email"
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
      />

      <Button onClick={onLogin}>
        Login
      </Button>
    </Stack>
  );
}