import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link  } from 'react-router-dom';

const MobileMenu = ({location, content}) => {
	const mobile_menu = () => {
		const menu = document.querySelector('.mobile-menu');
			menu.classList.toggle('hidden');
	};

	return (
		<>
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
		</>
	)
};

export default MobileMenu;
