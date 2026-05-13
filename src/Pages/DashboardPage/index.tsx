import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

import Typography from "../../components/atoms/Typography";
import Button from "../../components/atoms/Button";

const dashboardStats = [
  {
    value: "3",
    label: "Available Courses",
  },
  {
    value: "72%",
    label: "Overall Progress",
  },
  {
    value: "5",
    label: "Assignments Pending",
  },
];

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h4">
        Student Dashboard
      </Typography>

      <Typography>
        This is your main learning dashboard.
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{ mt: 3 }}
      >
        {dashboardStats.map((stat) => (
          <Grid
            size={{ xs: 12, md: 4 }}
            key={stat.label}
          >
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
              }}
            >
              <Typography variant="h4">
                {stat.value}
              </Typography>

              <Typography>
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Button
          onClick={() =>
            navigate("/courses")
          }
        >
          Explore Courses
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            navigate("/profile")
          }
        >
          View Profile
        </Button>
      </Stack>
    </>
  );
}