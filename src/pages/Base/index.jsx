import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar';

const Base = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
};

export default Base;
