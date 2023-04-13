const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <span className="bg-sun mr-5 flex flex-col sm:flex-row outline outline-2 outline-light-200">
      <button
        onClick={() => setLanguage("pt-BR")}
        className={`px-2 ${language == "pt-BR" ? "is-pt" : "is-en"}`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en-US")}
        className={`px-2 ${language == "pt-BR" ? "is-en" : "is-pt"}`}
      >
        EN
      </button>
    </span>
  );
};

export default LanguageSwitcher;
