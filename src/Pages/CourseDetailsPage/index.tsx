import Paper from "@mui/material/Paper";

import { useParams } from "react-router-dom";

import Typography from "../../components/atoms/Typography";
import Button from "../../components/atoms/Button";

import { courses } from "../../data/courses";

export default function CourseDetailsPage() {
  const { courseId } = useParams();

  const course = courses.find(
    (item) => item.id === courseId
  );

  if (!course) {
    return (
      <Typography variant="h4">
        Course Not Found
      </Typography>
    );
  }

  return (
    <Paper sx={{ p: 4, maxWidth: 600 }}>
      <Typography variant="h4">
        {course.title}
      </Typography>

      <Typography>
        {course.description}
      </Typography>

      <Typography>
        Course ID: {course.id}
      </Typography>

      <Typography>
        Level: {course.level}
      </Typography>

      <Typography>
        Duration: {course.duration}
      </Typography>

      <Button>
        Enroll Now
      </Button>
    </Paper>
  );
}