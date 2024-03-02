import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ToggleTheme from "./ToggleTheme";
import { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const location = useLocation();

  useEffect(() => {
    language === "pt-BR"
      ? (document.title = "Prince Neres | Portfólio")
      : (document.title = "Prince Neres | Portfolio");
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
            {t("navbar.about")}
          </Link>
        </div>
        <div
          className={`p-3 mx-1 ${
            location.pathname === "/experience" ? "nav-link-active" : "nav-link"
          }`}
        >
          <Link to="/experience" className="flex">
            <BriefcaseIcon className="nav-icon" />
            {t("navbar.experience")}
          </Link>
        </div>
        <div
          className={`p-3 mx-1 ${
            location.pathname === "/education" ? "nav-link-active" : "nav-link"
          }`}
        >
          <Link to="/education" className="flex">
            <AcademicCapIcon className="nav-icon" />
            {t("navbar.education")}
          </Link>
        </div>
        <div
          className={`p-3 mx-1 ${
            location.pathname === "/projects" ? "nav-link-active" : "nav-link"
          }`}
        >
          <Link to="/projects" className="flex">
            <WrenchScrewdriverIcon className="nav-icon" />
            {t("navbar.projects")}
          </Link>
        </div>
      </div>
      <MobileMenu location={location} />
      <div className="flex flex-col md:flex-row gap-2 justify-center text-center items-center mx-5">
        <LanguageSwitcher />
        <ToggleTheme />
      </div>
    </nav>
  );
}
