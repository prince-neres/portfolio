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
          <div className="px-5 py-2 ">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link-active" : "nav-link"
              }
            >
              {content.home}
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/experience"
              className={
                location.pathname === "/experience"
                  ? "nav-link-active"
                  : "nav-link"
              }
            >
              {content.experience}
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/education"
              className={
                location.pathname === "/education"
                  ? "nav-link-active"
                  : "nav-link"
              }
            >
              {content.education}
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/projects"
              className={
                location.pathname === "/projects"
                  ? "nav-link-active"
                  : "nav-link"
              }
            >
              {content.projects}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
