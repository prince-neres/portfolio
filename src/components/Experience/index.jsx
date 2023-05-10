import { useContext, useState, useEffect } from "react";
import { formatDate, formatLocation, monthsDiff } from "../../commons/utils.js";
import { motion } from "framer-motion";
import { Context } from "../../Context.js";
import xp_pt from "./xp_pt.json";
import xp_en from "./xp_en.json";

const Experience = () => {
  const [language] = useContext(Context);
  const defineContent = language === "pt-BR" ? xp_pt : xp_en;
  const [content, setContent] = useState(defineContent);

  useEffect(() => {
    setContent(defineContent);
  }, [language]);

  return (
    <motion.div
      className="py-5 px-5 md:px-10 xl:px-56 2xl:px-96"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {content.map((xp, index) => (
        <motion.div key={index} className="item pb-8" variants={item}>
          <h3 className="font-bold text-xl text-black dark:text-purple_">
            {xp.office}
          </h3>
          <h4 className="font-bold">{`${xp.company} · ${xp.type}`}</h4>
          <p>
            <i>{formatLocation(xp.location)}</i>
          </p>
          <span>{`${formatDate(xp.start_date, language)} - ${formatDate(
            xp.end_date,
            language
          )} - ${monthsDiff(xp.start_date, xp.end_date, language)}`}</span>
          <p className="indent-8 text-justify pt-2">{xp.description}</p>
          <div className="flex flex-row flex-wrap pt-2 items-center">
            <strong className="mr-2">
              {language === "pt-BR" ? "Competências" : "Skills"}:
            </strong>
            {xp.skills.map((skill, index) => (
              <div key={index} className="my-3">
                <span className="tag">{`${skill}`}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;

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
