import { Link, useLocation  } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ToggleTheme from "../ToggleTheme";

export default function Navbar () {
	const location = useLocation();
	const mobile_menu = () => {
		const menu = document.querySelector(".mobile-menu");
		menu.classList.toggle("hidden");
	}

  return (
    <nav>
			<div className="hidden md:block md:flex md:flex-row">
        <div className="px-5 py-6">
          <Link to="/" className={location.pathname === "/" ? "font-bold text-sun" : "hover:text-sun duration-200"}>
            Início
          </Link>
        </div>
				<div className="px-5 py-6">
          <Link to="/experience" className={location.pathname === "/experience" ? "font-bold text-sun" : "hover:text-sun duration-200"}>
            Experiência
          </Link>
        </div>
				<div className="px-5 py-6">
          <Link to="/education" className={location.pathname === "/education" ? "font-bold text-sun" : "hover:text-sun duration-200"}>
            Formação
          </Link>
        </div>
        <div className="px-5 py-6">
          <Link to="/projects" className={location.pathname === "/projects" ? "font-bold text-sun" : "hover:text-sun duration-200"}>
            Projetos
          </Link>
        </div>
			</div>
			<div className="block md:hidden items-center p-5" onClick={mobile_menu}>
				<button className="outline-none mobile-menu-button">
					<Bars3Icon className="h-10" />
				</button>
			</div>
			<div className="hidden mobile-menu">
				<div className="flex flex-col md:hidden items-center">
					<div className="px-5 py-2 ">
						<Link to="/" className={location.pathname === "/" ? "font-bold text-sun" : "hover:text-sun duration-200"}>
							Início
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link to="/experience" className={location.pathname === "/experience" ? "font-bold text-sun" : "hover:text-sun duration-200"}>
							Experiência
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link to="/education" className={location.pathname === "/education" ? "font-bold text-sun" : "hover:text-sun duration-200"}>
							Formação
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link to="/projects" className={location.pathname === "/projects" ? "font-bold text-sun" : "hover:text-sun duration-200"}>
							Projetos
						</Link>
					</div>
				</div>
			</div>
			<div className="pr-5 sm:p-5 md:p-0 md:pr-5">
			  <ToggleTheme />
			</div>
    </nav>
  )
};
