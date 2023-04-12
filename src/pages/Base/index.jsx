import { useState } from "react";
import { Outlet } from "react-router";
import { Context } from "../../Context";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Base = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "pt-BR"
  );

  return (
    <div className="h-screen flex flex-col justify-between scrollbar-thin scrollbar-thumb-sun scrollbar-track-light-100 dark:scrollbar-track-dark-200 overflow-y-scroll scrollbar-thumb-rounded-full">
      <Context.Provider value={[language, setLanguage]}>
        <Navbar />
        <Outlet />
        <Footer />
      </Context.Provider>
    </div>
  );
};

export default Base;
