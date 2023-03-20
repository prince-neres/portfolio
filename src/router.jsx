import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './pages/Base';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Training from './pages/Training';
import Projects from './pages/Projects';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base />} >
          <Route index element={<Home />} />
          <Route path='/experience' element={<Experience />} />
					<Route path='/education' element={<Training />} />
					<Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
