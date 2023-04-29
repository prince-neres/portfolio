import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const MobileMenu = ({ location, content }) => {
  const mobile_menu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <>
      <div className="block md:hidden items-center pl-5" onClick={mobile_menu}>
        <button className="outline-none mobile-menu-button">
          <Bars3Icon className="h-10" />
        </button>
      </div>
      <div className="hidden mobile-menu">
        <div className="flex flex-col md:hidden items-center">
          <div
            className={`px-5 py-6 ${
              location.pathname === "/" ? "nav-link-active" : "nav-link"
            }`}
          >
            <Link to="/" className="flex justify-center">
              {content.about}
            </Link>
          </div>
          <div
            className={`px-5 py-6 ${
              location.pathname === "/experience"
                ? "nav-link-active"
                : "nav-link"
            }`}
          >
            <Link to="/experience" className="flex justify-center">
              {content.experience}
            </Link>
          </div>
          <div
            className={`px-5 py-6 ${
              location.pathname === "/education"
                ? "nav-link-active"
                : "nav-link"
            }`}
          >
            <Link to="/education" className="flex justify-center">
              {content.education}
            </Link>
          </div>
          <div
            className={`px-5 py-6 ${
              location.pathname === "/projects" ? "nav-link-active" : "nav-link"
            }`}
          >
            <Link to="/projects" className="flex justify-center">
              {content.projects}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
