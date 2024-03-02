import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import TypingAnimation from "./TypingAnimation";
import me_jpg from "../../assets/me.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n, t } = useTranslation();
	const language = i18n.language;
	const aboutJson = i18n.store.data[language].translations.about;

  const contacts = {
    icons: [
      <IoLogoWhatsapp className="mr-2" />,
      <SiGmail className="mr-2" />,
      <FaLinkedin className="mr-2" />,
      <FaGithub className="mr-2" />,
    ],
    bgColors: [
      "hover:text-contacts-whatsapp",
      "hover:text-contacts-gmail",
      "hover:text-contacts-linkedin",
      "hover:text-contacts-github",
    ],
  };

  return (
    <main className="py-5 px-5 md:px-10 xl:px-56 2xl:px-96 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <img src={me_jpg} className="rounded-full h-40" />
        <div className="h-full text-center">
          <div className="text-center">
            <TypingAnimation />
          </div>
          <i className="px-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple_ to-pink-600">
            {t("about.office")}
          </i>
          <ul className="w-full flex flex-wrap justify-center">
            {aboutJson.contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                className={`contact ${contacts.bgColors[index]}`}
              >
                {contacts.icons[index]}
                {contact.name}
              </a>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        {aboutJson.paragraphs.map((paragraph, index) => (
          <p
            className="indent-8 text-justify"
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </main>
  );
};

export default About;
