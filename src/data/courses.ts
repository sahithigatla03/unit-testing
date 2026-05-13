export type Course = {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
};

export const courses: Course[] = [
  {
    id: "react",
    title: "React Basics",
    level: "Beginner",
    duration: "4 weeks",
    description: "Learn components, props, state, and hooks.",
  },
  {
    id: "typescript",
    title: "TypeScript with React",
    level: "Beginner",
    duration: "3 weeks",
    description: "Learn props typing, interfaces, and safer React code.",
  },
  {
    id: "router",
    title: "React Router",
    level: "Intermediate",
    duration: "2 weeks",
    description: "Learn page navigation, dynamic routes, and 404 pages.",
  },
];