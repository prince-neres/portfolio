import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Base = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Navbar />
      <Outlet />
			<Footer />
    </div>
  )
};

export default Base;
