import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { useCycle, motion } from "framer-motion";

const MobileMenu = ({ location, content }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <>
      <div className="block md:hidden items-center  text-center">
        <ToggleButton isOpen={isOpen} toggle={() => toggleOpen()} />
      </div>
      <div className="md:hidden">
        {isOpen ? (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
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
                  location.pathname === "/projects"
                    ? "nav-link-active"
                    : "nav-link"
                }`}
              >
                <Link to="/projects" className="flex justify-center">
                  {content.projects}
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </>
  );
};

export default MobileMenu;
