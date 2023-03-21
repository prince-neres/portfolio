import { useContext } from "react";
import { Context } from "../../Context";

const Footer = () => {
	const [language, setLanguage] = useContext(Context);

	return (
		<footer className='w-full h-auto p-10 text-center items-end'>
			<p>Copyright © 2023 <a href='https://prince-neres.space' target='_blank' className='hover:text-sun duration-200'>
				prince-neres.space. </a>
				{ language === 'pt-BR' ? 'Todos os direitos reservados.' : 'All rights reserved.' }
			</p>
		</footer>
	)
};

export default Footer;
