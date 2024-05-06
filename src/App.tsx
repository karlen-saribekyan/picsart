import { RouterProvider } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary";
import { router } from "./router";

import "./App.css";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} fallbackElement="Loading..." />
    </ErrorBoundary>
  );
};

export default App;
