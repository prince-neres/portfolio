import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ToggleTheme() {
  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem("darkMode"));
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  });

  const toogle = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      document.documentElement.classList.contains("dark")
    );
  };

  return (
    <div className="h-12 rounded-full select-none">
      <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 1 } }}
        whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
      >
        <MoonIcon
          className="text-moon_ block dark:hidden cursor-pointer h-12 hover:text-yellow-400 duration-300"
          onClick={toogle}
        />
        <SunIcon
          className="text-sun_ hidden dark:block cursor-pointer h-12 hover:text-yellow-400 duration-300"
          onClick={toogle}
        />
      </motion.div>
    </div>
  );
}
