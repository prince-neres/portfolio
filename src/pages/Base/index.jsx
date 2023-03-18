import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Base = () => {
  return (
    <div className='h-screen flex flex-col justify-between scrollbar-thin scrollbar-thumb-sun scrollbar-track-light-100 dark:scrollbar-track-dark-200 overflow-y-scroll scrollbar-thumb-rounded-full'>
			<Navbar />
      <Outlet />
			<Footer />
    </div>
  )
};

export default Base;
