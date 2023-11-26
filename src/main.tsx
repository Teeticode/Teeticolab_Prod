import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TourProvider } from "@reactour/tour";

const steps = [
  {
    selector: ".get_in_touch",
    content: <h4 style={{ color: "black" }}>Get in touch to find out more!</h4>,
  },
  {
    selector: ".avatar img",
    content: <h4 style={{ color: "black" }}>Set your on profile photo!</h4>,
  },
];
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TourProvider steps={steps}>
      <App />
    </TourProvider>
  </React.StrictMode>
);
