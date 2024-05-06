import { createBrowserRouter } from "react-router-dom";
import { Result } from "antd";

import { RoutePath } from "../constants/routes";
import HomePage from "../pages/HomePage";
import UserDetailsPage from "../pages/UserDetailsPage";
import UserListPage from "../pages/UserListPage";

export const router = createBrowserRouter([
  {
    path: RoutePath.HomePage,
    element: <HomePage />,
    errorElement: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    )
  },
  {
    path: RoutePath.UserListPage,
    element: <UserListPage />
  },
  {
    path: RoutePath.UserDetailsPage,
    element: <UserDetailsPage />
  }
]);
