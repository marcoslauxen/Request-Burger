import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Request from "./pages/Request";
import Accompany from "./pages/Accompany";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Request />} />
        <Route path="/acompanhar" element={<Accompany />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
