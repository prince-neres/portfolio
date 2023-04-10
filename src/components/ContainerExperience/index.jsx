import { useContext, useState, useEffect } from "react";
import { formatDate, formatLocation, monthsDiff } from "../../commons/utils.js";
import { Context } from "../../Context.js";
import xp_pt from "./xp_pt.json";
import xp_en from "./xp_en.json";

const ContainerExperience = () => {
  const [language] = useContext(Context);
  const defineContent = language === "pt-BR" ? xp_pt : xp_en;
  const [content, setContent] = useState(defineContent);

  useEffect(() => {
    setContent(defineContent);
  }, [language]);

  return (
    <div className="h-auto p-3 lg:px-72">
      {content.map((xp, index) => (
        <div key={index} className="px-10 py-4">
          <h3 className="font-bold text-xl text-sun">{xp.office}</h3>
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
            <strong>{language === "pt-BR" ? "Competências" : "Skills"}:</strong>
            {xp.skills.map((skill, index) => (
              <div key={index} className="my-3">
                <span className="p-2 bg-sun rounded-full text-dark-200 font-fira mx-2 text-sm">
                  {`${skill}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContainerExperience;
