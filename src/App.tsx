import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary";
import { store } from "./redux/store";
import { router } from "./router";

import "./App.css";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement="Loading..." />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
