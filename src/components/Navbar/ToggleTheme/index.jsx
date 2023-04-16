import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

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
    <div className="h-14 rounded-full select-none">
      <MoonIcon
        className="text-sun_ block dark:hidden cursor-pointer h-14 hover:text-yellow-400 duration-300"
        onClick={toogle}
      />
      <SunIcon
        className="text-sun_ hidden dark:block cursor-pointer h-14 hover:text-yellow-400 duration-300"
        onClick={toogle}
      />
    </div>
  );
}
