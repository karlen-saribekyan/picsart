import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary";
import { store } from "./redux/store";
import { router } from "./router";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <RouterProvider router={router} fallbackElement="Loading..." />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
