import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AlertProvider } from "@contexts/AlertContext";
import { AlertPopup } from "@ui-kit/alertPopup";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { store } from "./store";
import App from "./App";
import "./index.css";
import "@theme/index.scss";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AlertProvider>
          <>
            <App />
            <AlertPopup />
          </>
        </AlertProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
