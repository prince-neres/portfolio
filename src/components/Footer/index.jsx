import { useContext } from "react";
import { Context } from "../../Context";

const Footer = () => {
  const [language, setLanguage] = useContext(Context);

  return (
    <footer className="w-full h-auto p-10 text-center items-end">
      <p>
        Copyright © 2023{" "}
        <a
          href="https://princeneres.netlify.app"
          target="_blank"
          className="hover:text-purple_ duration-200"
        >
          princeneres.netlify.app.{" "}
        </a>
        {language === "pt-BR"
          ? "Todos os direitos reservados."
          : "All rights reserved."}
      </p>
    </footer>
  );
};

export default Footer;
