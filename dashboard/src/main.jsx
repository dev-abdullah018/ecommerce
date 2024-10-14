import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
const App = lazy(() => import("./App.jsx"));
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);
