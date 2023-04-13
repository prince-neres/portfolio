import { Link, useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import nav_pt from "./nav_pt.json";
import nav_en from "./nav_en.json";
import {
  HomeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  const [language, setLanguage] = useContext(Context);
  const defineContent = language === "en-US" ? nav_en : nav_pt;
  const [content, setContent] = useState(defineContent);
  const location = useLocation();

  useEffect(() => {
    setContent(defineContent);
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <nav>
      <div className="hidden md:flex md:flex-row">
        <div
          className={`px-5 py-6 ${
            location.pathname === "/" ? "nav-link-active" : "nav-link"
          }`}
        >
          <Link to="/" className="flex">
            <HomeIcon className="nav-icon" />
            {content.home}
          </Link>
        </div>
        <div
          className={`px-5 py-6 ${
            location.pathname === "/experience" ? "nav-link-active" : "nav-link"
          }`}
        >
          <Link to="/experience" className="flex">
            <BriefcaseIcon className="nav-icon" />
            {content.experience}
          </Link>
        </div>
        <div
          className={`px-5 py-6 ${
            location.pathname === "/education" ? "nav-link-active" : "nav-link"
          }`}
        >
          <Link to="/education" className="flex">
            <AcademicCapIcon className="nav-icon" />
            {content.education}
          </Link>
        </div>
        <div
          className={`px-5 py-6 ${
            location.pathname === "/projects" ? "nav-link-active" : "nav-link"
          }`}
        >
          <Link to="/projects" className="flex">
            <WrenchScrewdriverIcon className="nav-icon" />
            {content.projects}
          </Link>
        </div>
      </div>
      <MobileMenu location={location} content={content} />
      <div className="flex items-center pr-5 sm:p-5 md:p-0 md:pr-5">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
        <ToggleTheme />
      </div>
    </nav>
  );
}
