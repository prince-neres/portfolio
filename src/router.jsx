import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import PageAbout from "./pages/PageAbout";
import PageExperience from "./pages/PageExperience";
import PageEducation from "./pages/PageEducation";
import PageProjects from "./pages/PageProjects";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<PageAbout />} />
          <Route path="/experience" element={<PageExperience />} />
          <Route path="/education" element={<PageEducation />} />
          <Route path="/projects" element={<PageProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
