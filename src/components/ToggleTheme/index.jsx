import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function ToggleTheme () {

	useEffect(() => {
		const darkMode = JSON.parse(localStorage.getItem("darkMode"));
		darkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
	});

	const toogle = () => {
		document.documentElement.classList.toggle("dark");
		localStorage.setItem("darkMode", document.documentElement.classList.contains("dark"));
	};

	return (
			<div className="h-14 hidden cursor-pointer sm:block pr-4">
				<MoonIcon className="h-14 text-moon block dark:hidden" onClick={toogle} />
				<SunIcon className="h-14 text-sun hidden dark:block" onClick={toogle} />
			</div>
		)
};
