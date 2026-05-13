import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Typography from "../../components/atoms/Typography";

import CourseCard from "../../components/organisms/CourseCard";

import { courses } from "../../data/courses";

export default function CoursesPage() {
  return (
    <Container>
      <Typography variant="h4">
        Courses
      </Typography>

      <Typography>
        Select a course to open its
        separate details page.
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{ mt: 3 }}
      >
        {courses.map((course) => (
          <Grid
            size={{ xs: 12, md: 4 }}
            key={course.id}
          >
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}