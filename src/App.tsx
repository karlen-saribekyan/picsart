import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} fallbackElement="Loading..." />
    </ErrorBoundary>
  );
};

export default App;
