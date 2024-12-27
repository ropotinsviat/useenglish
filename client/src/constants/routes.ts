import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const TestSearchPage = lazy(
  () => import("../pages/test-search/TestSearchPage")
);
const TestPage = lazy(() => import("../pages/test/TestPage"));

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/tests",
    component: TestSearchPage,
    exact: true,
  },
  {
    path: "/tests/:testId",
    component: TestPage,
    exact: true,
  },
];

export default routes;
