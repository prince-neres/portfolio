import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Base = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "pt-BR"
  );

  return (
    <div className="h-screen flex flex-col justify-between overflow-x-hidden scrollbar-thin scrollbar-thumb-blue_ dark:scrollbar-thumb-purple_ overflow-y-scroll scrollbar-thumb-rounded-full">
			<Navbar />
			<Outlet />
			<Footer />
    </div>
  );
};

export default Base;
