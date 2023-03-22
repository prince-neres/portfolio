import { useState, useContext, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Context } from '../../Context';
import about_pt from './about_pt.json';
import about_en from './about_en.json';
import Me from '../../assets/me.png';

const ContainerHome = () => {
	const [language] = useContext(Context);
	const defineContent = language === 'pt-BR' ? about_pt : about_en;
	const [content, setContent] = useState(defineContent);

	const icons = [
		<IoLogoWhatsapp className='mr-2' />,
		<SiGmail className='mr-2' />,
		<FaLinkedin className='mr-2' />,
		<FaGithub className='mr-2'/>,
		<RiInstagramFill className='mr-2' />
	];

	useEffect(() => {
		setContent(defineContent);
	}, [language]);

	return (
		<main className='h-auto p-3 lg:px-56'>
			<div className='items-center p-5 text-center sm:flex-col md:flex-row lg:px-32 lg:text-left lg:flex'>
				<img src={Me} className='rounded-full mb-5 sm:w-72 sm:h-72 mx-auto lg:m-0' />
				<div className='md:pl-10'>
					<div className='pb-5'>
						<h1 className='text-3xl font-bold'>{content.title}</h1>
						<i className='text-sun'>{content.office}</i>
					</div>
					{
						content.paragraphs.map((paragraph, index) =>
							<p className='indent-8 text-justify' key={index}>
								{paragraph}
							</p>
						)
					}
				</div>
			</div>
			<div className='w-full text-center'>
				<ul className='w-full flex flex-wrap justify-center px-10 pb-10'>
					{
						content.contacts.map((contact, index) => 
								<a key={index} href={contact.url} target='_blank' className='contact'>{icons[index]}{contact.name}</a>
						)
					}
				</ul>
			</div>
		</main>
	)
};

export default ContainerHome;
