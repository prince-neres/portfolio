import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full h-auto p-10 text-center items-end">
      <p>
        Copyright © 2024{" "}
        <a
          href="https://princeneres.dev"
          target="_blank"
          className="hover:text-primary_ duration-200"
        >
          princeneres.dev
        </a>.{" "}
        {t("footer.copyright_text")}
      </p>
    </footer>
  );
};

export default Footer;
