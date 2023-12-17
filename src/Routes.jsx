import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PageThree = React.lazy(() => import("pages/PageThree"));
const PageTwo = React.lazy(() => import("pages/PageTwo"));
const PageOne = React.lazy(() => import("pages/PageOne"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pageone" element={<PageOne />} />
          <Route path="/pagetwo" element={<PageTwo />} />
          <Route path="/pagethree" element={<PageThree />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
