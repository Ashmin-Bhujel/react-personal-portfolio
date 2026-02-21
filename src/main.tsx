import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";

import DefaultLayout from "./layouts/default-layout";
import AboutMe from "./pages/about-me";
import NotFound from "./pages/not-found";
import Skills from "./pages/skills";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
