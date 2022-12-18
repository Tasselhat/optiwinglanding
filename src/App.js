import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Missing from "./Pages/Missing";
import PrivacyPolicy from "./Pages/PrivacyPolicyPage";

import "./css/Homepage.css";

function App() {
  return (
    <Routes>
      <Route sensitive={false} path="/" element={<Homepage />} />
      <Route sensitive={false} path="/home" element={<Homepage />} />
      <Route
        sensitive={false}
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />

      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
