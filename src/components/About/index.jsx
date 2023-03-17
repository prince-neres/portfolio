import Me from '../../assets/me.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri"
import { IoLogoWhatsapp } from "react-icons/io"

const About = () => {
	return (
		<main className="h-auto bg-light-200 dark:bg-dark-200 mx-5 mb-5 rounded-xl">
			<div className="items-center p-10 sm:flex-col sm:justify-center sm:text-center md:flex-row md:text-left lg:flex">
				<img src={Me} className="rounded-full mb-5 w-72 h-72 mx-auto lg:m-0" />
				<div className='md:pl-10'>
					<div className='pb-5'>
						<h1 className='text-3xl font-bold'>Prince Neres</h1>
						<i className='text-sun'>Desenvolvedor Web</i>
					</div>
					<p className='indent-8 text-justify'>
						Tenho 21 anos, ingressei na área de tecnologia em 2021, inicialmente atuando na área de suporte técnico,
						prestando manutenção, instalação e configuração de hardware e software, além de auxiliar os usuários 
						nas mais diversas dificuldades.
					</p>
					<p className='indent-8 text-justify'>
						A partir de 2022, comecei a trabalhar com programação, desenvolvendo e mantendo sistemas com as linguagens de programação e 
						tecnologias: <span className='font-fira text-sun'>JavaScript, Python, React.Js, Django, Flask, Git, PostgreSQL</span> e <span className='font-fira text-sun'>MongoDB</span>, sempre utilizando de 
						metodologias ágeis como <span className='font-fira text-sun'>SCRUM</span> e <span className='font-fira text-sun'>KANBAN</span> para a entrega mais eficiente das demandas.
					</p>
				</div>
			</div>
			<div className='w-full text-center'>
				<ul className='w-full flex flex-wrap justify-center px-10 pb-10'>
					<li className='dark:bg-sun px-3 dark:text-dark-200 py-2 m-2 flex items-center cursor-pointer rounded-full'><IoLogoWhatsapp className='mr-2' />(62) 98422-4960</li>
					<li className='dark:bg-sun px-3 dark:text-dark-200 py-2 m-2 flex items-center cursor-pointer rounded-full'><SiGmail className='mr-2' />prince84224960@gmail.com</li>
					<li className='dark:bg-sun px-3 dark:text-dark-200 py-2 m-2 flex items-center cursor-pointer rounded-full'><FaLinkedin className='mr-2' />Prince Neres</li>
					<li className='dark:bg-sun px-3 dark:text-dark-200 py-2 m-2 flex items-center cursor-pointer rounded-full'><FaGithub className='mr-2' />prince-neres</li>
					<li className='dark:bg-sun px-3 dark:text-dark-200 py-2 m-2 flex items-center cursor-pointer rounded-full'><RiInstagramFill className='mr-2' />prince.neres</li>
				</ul>
			</div>
		</main>
	)
}

export default About;
