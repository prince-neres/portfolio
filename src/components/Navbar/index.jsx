import { Link, useLocation  } from "react-router-dom";
import ToggleTheme from "../ToggleTheme";

export default function Navbar () {
	const location = useLocation();

  return (
    <nav className="shadow-lg flex items-center h-20 bg-light-200 dark:bg-dark-200 px-10 justify-center sm:justify-between sm:rounded-xl sm:m-5 sm:px-5">
			<div className="flex items-center flex-col sm:flex-row">
        <div className="px-5">
          <Link to="/" className={location.pathname === "/" ? "font-bold" : ""}>
            Início
          </Link>
        </div>
        <div className="px-5">
          <Link to="/experience" className={location.pathname === "/experience" ? "font-bold" : ""}>
            Experiência
          </Link>
        </div>
			</div>
			<ToggleTheme />
    </nav>
  )
};
