import { useState } from "react";
import Spin from "../Spin";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const projectsJson = i18n.store.data[language].translations.projects;
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="py-5 lg:py-0 px-5 md:px-10 xl:px-56 2xl:px-96 flex">
      <motion.div
        className="container grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-10 lg:px-0"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projectsJson.projects.map((project, index) => (
          <motion.div key={index} className="item text-center" variants={item}>
            <div className="hover:blur-[.2rem] cursor-pointer">
              {!imageLoaded && <Spin />}
              <img
                src={project.previews[0]}
                className={`mb-3 aspect-video rounded`}
                onLoad={handleImageLoad}
              />
            </div>
            <h3 className="font-bold text-black dark:text-white">
              {project.name}
            </h3>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                className="project-link-button"
              >
                <FaLink className=" mr-2" />
                <i>{t("projects.titles.link")}</i>
              </a>
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                className="project-link-button"
              >
                <FaGithub className=" mr-2" />
                <i>{t("projects.titles.repo")}</i>
              </a>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
