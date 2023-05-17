const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <span className="bg-sun rounded flex flex-col justify-center mb-3 sm:mb-0 sm:flex-row md:mr-5 outline outline-2 outline-black dark:outline-white">
      <button
        onClick={() => setLanguage("pt-BR")}
        className={`px-2 drop-shadow-2xl ${
          language == "pt-BR" ? "is-pt" : "is-en"
        } duration-300`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en-US")}
        className={`px-2 ${
          language == "pt-BR" ? "is-en" : "is-pt"
        } duration-300`}
      >
        EN
      </button>
    </span>
  );
};

export default LanguageSwitcher;
