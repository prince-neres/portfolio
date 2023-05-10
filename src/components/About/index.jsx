import { useState, useContext, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { Context } from "../../Context";
import about_pt from "./about_pt.json";
import about_en from "./about_en.json";
import Me from "../../assets/me.jpg";
import DownloadCVButton from "./DownloadCVButton";
import TypingAnimation from "./TypingAnimation";

const About = () => {
  const [language] = useContext(Context);
  const defineContent = language === "pt-BR" ? about_pt : about_en;
  const [content, setContent] = useState(defineContent);

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
      "hover:text-contacts-githun",
    ],
  };

  useEffect(() => {
    setContent(defineContent);
  }, [language]);

  return (
    <main className="py-5 px-5 md:px-10 xl:px-56 2xl:px-96 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <img src={Me} className="rounded-full h-36" />
        <div className="h-full text-center">
          <div className="text-center">
            <TypingAnimation text={content.title} />
          </div>
          <i className="text-purple_">{content.office}</i>
          <ul className="w-full flex flex-wrap justify-center">
            {content.contacts.map((contact, index) => (
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
        {content?.paragraphs?.map((paragraph, index) => (
          <p
            className="indent-8 text-justify"
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
        <div className="flex justify-center pt-5">
          <DownloadCVButton
            title={language === "pt-BR" ? "Currículo" : "Curriculum"}
          />
        </div>
      </div>
    </main>
  );
};

export default About;
