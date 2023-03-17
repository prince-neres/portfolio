import Me from '../../assets/me.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';

const About = () => {
	const mailto = 'mailto:prince84224960@gmail.com';

	return (
		<main className='shadow-lg h-auto bg-light-100 dark:bg-dark-200 mx-5 mb-5 rounded-xl'>
			<div className='items-center p-10 text-center sm:flex-col md:flex-row lg:text-left lg:flex'>
				<img src={Me} className='rounded-full mb-5 sm:w-72 sm:h-72 mx-auto lg:m-0' />
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
					<a href='https://wa.me/5562984224960' target='_blank' className='contact'><IoLogoWhatsapp className='mr-2' />(62) 98422-4960</a>
					<a href={mailto} target='_blank' className='contact'><SiGmail className='mr-2' />prince84224960@gmail.com</a>
					<a href='https://www.linkedin.com/in/prince-neres' target='_blank' className='contact'><FaLinkedin className='mr-2' />Prince Neres</a>
					<a href='https://github.com/prince-neres' target='_blank' className='contact'><FaGithub className='mr-2' />prince-neres</a>
					<a href='https://www.instagram.com/prince.neres/' target='_blank' className='contact'><RiInstagramFill className='mr-2' />prince.neres</a>
				</ul>
			</div>
		</main>
	)
}

export default About;
