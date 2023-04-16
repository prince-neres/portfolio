import { useContext, useState, useEffect } from "react";
import Spin from "../Spin";
import { Context } from "../../Context";
import projects_en from "./projects_en.json";
import projects_pt from "./projects_pt.json";
import { FaGithub, FaLink } from "react-icons/fa";

const ContainerProjects = () => {
  const [language] = useContext(Context);
  const defineContent = language === "pt-BR" ? projects_pt : projects_en;
  const [content, setContent] = useState(defineContent);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    setContent(defineContent);
  }, [language]);

  return (
    <div className="py-5 lg:py-0 px-5 md:px-10 xl:px-56 2xl:px-96 flex">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-10 lg:px-0">
        {content.projects.map((project, index) => (
          <div key={index} className="text-center">
            <div className="group">
              {!imageLoaded && <Spin />}
              <img
                src={project.previews[0]}
                className={`pb-3 group-hover:hidden aspect-video ${
                  imageLoaded ? "block" : "hidden"
                }`}
                onLoad={handleImageLoad}
              />
              <img
                src={project.previews[1] || project.previews[0]}
                className="pb-3 hidden aspect-video group-hover:block	"
              />
            </div>
            <h3 className="font-bold text-blue_ dark:text-yellow_">
              {project.name}
            </h3>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                className="project-link-button"
              >
                <FaLink className=" mr-2" />
                <i>{content.titles.link}</i>
              </a>
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                className="project-link-button"
              >
                <FaGithub className=" mr-2" />
                <i>{content.titles.repo}</i>
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContainerProjects;
