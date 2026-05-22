import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      // other potential pages could go here later
    ],
  },
]);
