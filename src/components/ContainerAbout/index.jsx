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

const ContainerAbout = () => {
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
      "bg-contacts-whatsapp hover:bg-green-500",
      "bg-contacts-gmail hover:bg-red-400",
      "bg-contacts-linkedin hover:bg-blue-500",
      "bg-contacts-github hover:bg-gray-700",
    ],
  };

  useEffect(() => {
    setContent(defineContent);
  }, [language]);

  return (
    <main className="py-5 px-5 md:px-10 xl:px-56 2xl:px-96">
      <div className="flex items-center text-center flex-col lg:text-left lg:flex-row pb-5">
        <img src={Me} className="rounded w-36 h-36 sm:w-52 sm:h-52" />
        <div className="lg:pl-10">
          <div className="pb-5">
            <TypingAnimation text={content.title} />
            <i className="text-purple_">{content.office}</i>
          </div>
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
      </div>
      <div className="w-full text-center">
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
    </main>
  );
};

export default ContainerAbout;
