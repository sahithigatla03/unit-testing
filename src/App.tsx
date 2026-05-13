import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import MainLayout from "./templates/MainLayout";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import SignupPage from "./Pages/SignupPage";
import CoursesPage from "./Pages/CoursesPage";
import CourseDetailsPage from "./Pages/CourseDetailsPage";
import ProfilePage from "./Pages/ProfilePage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route
            index
            element={<Navigate to="login" replace />}
          />

          <Route
            path="login"
            element={<LoginPage />}
          />

          <Route
            path="signup"
            element={<SignupPage />}
          />

          <Route
            path="dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="courses"
            element={<CoursesPage />}
          />

          <Route
            path="courses/:courseId"
            element={<CourseDetailsPage />}
          />

          <Route
            path="profile"
            element={<ProfilePage />}
          />

          <Route
            path="*"
            element={<Navigate to="login" replace />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}