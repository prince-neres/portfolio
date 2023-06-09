import { Link, useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import nav_pt from "./nav_pt.json";
import nav_en from "./nav_en.json";
import {
  UserIcon,
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
    language === "pt-BR"
      ? (document.title = "Prince Neres | Portfólio")
      : (document.title = "Prince Neres | Portfolio");
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <nav>
      <div className="hidden md:flex md:flex-row">
        <div
          className={`p-3 mx-1 ${
            location.pathname === "/" ? "nav-link-active" : "nav-link"
          }`}
        >
          <Link to="/" className="flex">
            <UserIcon className="nav-icon" />
            {content.about}
          </Link>
        </div>
        <div
          className={`p-3 mx-1 ${
            location.pathname === "/experience" ? "nav-link-active" : "nav-link"
          }`}
        >
          <Link to="/experience" className="flex">
            <BriefcaseIcon className="nav-icon" />
            {content.experience}
          </Link>
        </div>
        <div
          className={`p-3 mx-1 ${
            location.pathname === "/education" ? "nav-link-active" : "nav-link"
          }`}
        >
          <Link to="/education" className="flex">
            <AcademicCapIcon className="nav-icon" />
            {content.education}
          </Link>
        </div>
        <div
          className={`p-3 mx-1 ${
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
      <div className="flex flex-col md:flex-row gap-2 justify-center text-center items-center mx-5">
        <LanguageSwitcher setLanguage={setLanguage} language={language} />
        <ToggleTheme />
      </div>
    </nav>
  );
}
