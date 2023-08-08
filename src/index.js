import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./utils/extendTheme";
import { ChakraProvider } from "@chakra-ui/react";
import { EventsDataProvider } from "./components/EventsDataContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <BrowserRouter basename="/EventPlanner">
        <ChakraProvider theme={theme}>
          <EventsDataProvider>
            <App />
          </EventsDataProvider>
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  </I18nextProvider>
);

reportWebVitals();
