import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Register,
  Landing,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Admin,
  Stats,
  AllJobs,
  Profile,
} from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
        action: LoginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: "stats",
            element: <Stats />,
          },

          {
            path: "all-jobs",
            element: <AllJobs />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
