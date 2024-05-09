import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SSRExample from "./SSRExample";

import "./index.css";

console.log(process.env.REACT_APP_SSR);
const html = document.getElementById("root") as HTMLElement;

if (process.env.REACT_APP_SSR) {
  ReactDOM.hydrateRoot(html, <SSRExample />);
} else {
  ReactDOM.createRoot(html).render(<App />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
