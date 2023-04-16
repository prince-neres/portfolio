import { useState, useContext, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { Context } from "../../Context";
import about_pt from "./about_pt.json";
import about_en from "./about_en.json";
import Me from "../../assets/me.jpg";
import CvButton from "./CvButton";
import TypingAnimation from "./TypingAnimation";

const ContainerHome = () => {
  const [language] = useContext(Context);
  const defineContent = language === "pt-BR" ? about_pt : about_en;
  const [content, setContent] = useState(defineContent);

  const contacts = {
    icons: [
      <IoLogoWhatsapp className="mr-2" />,
      <SiGmail className="mr-2" />,
      <FaLinkedin className="mr-2" />,
      <FaGithub className="mr-2" />,
      <RiInstagramFill className="mr-2" />,
    ],
    bgColors: [
      "bg-contacts-whatsapp hover:bg-green-500",
      "bg-contacts-gmail hover:bg-red-400",
      "bg-contacts-linkedin hover:bg-blue-500",
      "bg-contacts-github hover:bg-gray-700",
      "bg-contacts-instagram hover:bg-pink-500",
    ],
  };

  useEffect(() => {
    setContent(defineContent);
  }, [language]);

  return (
    <main className="py-5 px-5 md:px-10 xl:px-56 2xl:px-96">
      <div className="flex items-center text-center flex-col lg:text-left lg:flex-row pb-5">
        <img
          src={Me}
          className="rounded-full mb-5 w-56 h-56 md:w-72 md:h-72 mx-auto lg:m-0"
        />
        <div className="lg:pl-10">
          <div className="pb-5">
            <TypingAnimation text={content.title} />
            <i className="text-purple_">{content.office}</i>
          </div>
          {content?.paragraphs?.map((paragraph, index) => (
            <p className="indent-8 text-justify" key={index}>
              {paragraph}
            </p>
          ))}
          <div className="flex justify-center pt-5">
            <CvButton
              title={language === "pt-BR" ? "Currículo" : "Curriculum"}
            />
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <ul className="w-full flex flex-wrap justify-center pb-10">
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

export default ContainerHome;
