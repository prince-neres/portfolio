import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full h-auto p-10 text-center items-end">
      <p>
        Copyright © 2024{" "}
        <a
          href="https://princeneres.netlify.app"
          target="_blank"
          className="hover:text-purple_ duration-200"
        >
          princeneres.netlify.app.{" "}
        </a>
        {t("footer.copyright_text")}
      </p>
    </footer>
  );
};

export default Footer;
