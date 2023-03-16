import { Link, useLocation  } from "react-router-dom";
import ToggleTheme from "../ToggleTheme";

export default function Navbar () {
	const location = useLocation();

  return (
    <nav className="shadow-lg flex items-center bg-light-200 dark:bg-dark-200 justify-center sm:h-30 xl:h-20 lg:h-20 md:h-20 sm:rounded-xl sm:m-5 sm:px-5 sm:justify-between">
			<div className="flex items-center flex-col sm:flex-row">
        <div className="px-5 py-2 ">
          <Link to="/" className={location.pathname === "/" ? "font-bold" : "hover:text-sun"}>
            Início
          </Link>
        </div>
				<div className="px-5 py-2">
          <Link to="/skills" className={location.pathname === "/skills" ? "font-bold" : ""}>
            Habilidades
          </Link>
        </div>
				<div className="px-5 py-2">
          <Link to="/experience" className={location.pathname === "/experience" ? "font-bold" : ""}>
            Experiência
          </Link>
        </div>
				<div className="px-5 py-2">
          <Link to="/education" className={location.pathname === "/education" ? "font-bold" : ""}>
            Formação
          </Link>
        </div>
        <div className="px-5 py-2">
          <Link to="/projects" className={location.pathname === "/projects" ? "font-bold" : ""}>
            Projetos
          </Link>
        </div>
			</div>
			<ToggleTheme className="sm:justify-end" />
    </nav>
  )
};
