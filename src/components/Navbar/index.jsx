import { Link, useLocation  } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import ToggleTheme from '../ToggleTheme';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context';
import nav_pt from './nav_pt.json';
import nav_en from './nav_en.json';

export default function Navbar () {
	const [language, setLanguage] = useContext(Context);
	const [content, setContent] = useState(language === 'en-US' ? nav_en : nav_pt)
	const location = useLocation();
	const mobile_menu = () => {
		const menu = document.querySelector('.mobile-menu');
		menu.classList.toggle('hidden');
	};

	useEffect(() => {
		setContent(language === 'en-US' ? nav_en : nav_pt)
		localStorage.setItem('language', language)
	},[language])

  return (
    <nav>
			<div className='hidden md:block md:flex md:flex-row'>
        <div className='px-5 py-6'>
          <Link to='/' className={location.pathname === '/' ? 'font-bold text-sun' : 'hover:text-sun duration-200'}>
            {content.home}
          </Link>
        </div>
				<div className='px-5 py-6'>
          <Link to='/experience' className={location.pathname === '/experience' ? 'font-bold text-sun' : 'hover:text-sun duration-200'}>
            {content.experience}
          </Link>
        </div>
				<div className='px-5 py-6'>
          <Link to='/education' className={location.pathname === '/education' ? 'font-bold text-sun' : 'hover:text-sun duration-200'}>
            {content.education}
          </Link>
        </div>
        <div className='px-5 py-6'>
          <Link to='/projects' className={location.pathname === '/projects' ? 'font-bold text-sun' : 'hover:text-sun duration-200'}>
            {content.projects}
          </Link>
        </div>
			</div>
			<div className='block md:hidden items-center p-5' onClick={mobile_menu}>
				<button className='outline-none mobile-menu-button'>
					<Bars3Icon className='h-10' />
				</button>
			</div>
			<div className='hidden mobile-menu'>
				<div className='flex flex-col md:hidden items-center'>
					<div className='px-5 py-2 '>
						<Link to='/' className={location.pathname === '/' ? 'font-bold text-sun' : 'hover:text-sun duration-200'}>
							{content.home}
						</Link>
					</div>
					<div className='px-5 py-2'>
						<Link to='/experience' className={location.pathname === '/experience' ? 'font-bold text-sun' : 'hover:text-sun duration-200'}>
							{content.experience}
						</Link>
					</div>
					<div className='px-5 py-2'>
						<Link to='/education' className={location.pathname === '/education' ? 'font-bold text-sun' : 'hover:text-sun duration-200'}>
							{content.education}
						</Link>
					</div>
					<div className='px-5 py-2'>
						<Link to='/projects' className={location.pathname === '/projects' ? 'font-bold text-sun' : 'hover:text-sun duration-200'}>
							{content.projects}
						</Link>
					</div>
				</div>
			</div>
			<div className='flex items-center pr-5 sm:p-5 md:p-0 md:pr-5'>
				<span className='bg-sun mr-5 flex flex-col sm:flex-row outline outline-2 outline-light-200'>
					<button onClick={() => setLanguage('pt-BR')} className={`px-2 ${language == 'pt-BR' ? 'bg-dark-200 text-light-200' : 'bg-light-200 text-dark-200'}`}>PT</button>
					<button onClick={() => setLanguage('en-US')} className={`px-2 ${language == 'pt-BR' ? 'bg-light-200 text-dark-200' : 'bg-dark-200 text-light-200'}`}>EN</button>
				</span>
				<ToggleTheme />
			</div>
    </nav>
  )
};
