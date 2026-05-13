import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

type Course = {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
};

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {course.title}
        </Typography>

        <Typography sx={{ mt: 1 }}>{course.description}</Typography>

        <Typography sx={{ mt: 2 }}>
          <strong>Level:</strong> {course.level}
        </Typography>

        <Typography>
          <strong>Duration:</strong> {course.duration}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          component={Link}
          to={`/courses/${course.id}`}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}