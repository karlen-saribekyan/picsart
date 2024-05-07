export const RoutePath = Object.freeze({
  HomePage: "/",
  UserListPage: "/users",
  UserDetailsPage: "/users/:id"
});

export const RouteName = Object.freeze({
  [RoutePath.HomePage]: "Home",
  [RoutePath.UserListPage]: "Users",
  [RoutePath.UserDetailsPage]: "User"
});
