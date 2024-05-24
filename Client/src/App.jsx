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
  EditJob,
} from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as addJobAction } from "./pages/AddJob";
import { loader as allJobsLoader } from "./pages/AllJobs";
import { action as editJobAction } from "./pages/EditJob";
import { loader as editJobLoader } from "./pages/EditJob";
import { action as deleteJobAction } from "./pages/DeleteJob";
import { loader as adminLoader } from "./pages/Admin";

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
            action: addJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
          },

          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            action: editJobAction,
            loader: editJobLoader,
          },
          { path: "delete-job/:id", action: deleteJobAction },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
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
