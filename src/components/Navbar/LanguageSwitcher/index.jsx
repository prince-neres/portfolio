import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
	const { i18n} = useTranslation();
	const selectedLanguage = i18n.language;

  return (
    <span className="bg-sun rounded flex flex-col justify-center mb-3 sm:mb-0 sm:flex-row md:mr-5 outline outline-2 outline-black dark:outline-white">
      <button
        className={`px-2 rounded-l ${
          selectedLanguage === "pt-BR" ? "is-active" : ""
        } duration-300`}
        onClick={() => i18n.changeLanguage("pt-BR")}
      >
        PT
      </button>
      <button
        className={`px-2 rounded-r ${
          selectedLanguage === "en-US" ? "is-active" : ""
        } duration-300`}
        onClick={() => i18n.changeLanguage("en-US")}
      >
        EN
      </button>
    </span>
  );
};

export default LanguageSwitcher;
