import { formatDate, formatLocation } from "../../commons/utils.js";
import CertificatesButton from "./CertificatesButton/index.jsx";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const educationJson = i18n.store.data[language].translations.education;

  return (
    <div className="py-5 px-5 md:px-10 xl:px-56 2xl:px-96">
      {educationJson.academic.map((education, index) => (
        <div key={index} className="pb-4">
          <h3 className="font-bold text-xl dark:text-white">
            {education.institute}
          </h3>
          <h4 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary_ to-pink-600">{`${education.course} · ${education.type}`}</h4>
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
          title={t("education.certifications.title")}
          url={t("education.certifications.url")}
        />
      </div>
    </div>
  );
};

export default Education;
