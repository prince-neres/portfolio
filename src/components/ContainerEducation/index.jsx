import { formatDate, formatLocation } from "../../commons/utils.js";
import education_pt from "./education_pt.json";
import education_en from "./education_en.json";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import CertificatesButton from "./CertificatesButton/index.jsx";

const ContainerEducation = () => {
  const [language] = useContext(Context);
  const defineContent = language === "pt-BR" ? education_pt : education_en;
  const [content, setContent] = useState(defineContent);

  useEffect(() => {
    setContent(defineContent);
  }, [language]);

  return (
    <div className="py-5 px-5 md:px-10 xl:px-56 2xl:px-96">
      {content.academic.map((education, index) => (
        <div key={index} className="pb-4">
          <h3 className="font-bold text-xl text-sun">{education.institute}</h3>
          <h4 className="font-bold">{`${education.course} · ${education.type}`}</h4>
          <p>
            <i>{formatLocation(education.location)}</i>
          </p>
          <span>{`${formatDate(education.start_date, language)} - ${formatDate(
            education.end_date,
            language
          )}`}</span>
          <p className="indent-8 text-justify pt-2">{education.description}</p>
        </div>
      ))}
      <div className="text-center py-10">
        <CertificatesButton
          url={content.certifications.url}
          title={content.certifications.title}
        />
      </div>
    </div>
  );
};

export default ContainerEducation;
