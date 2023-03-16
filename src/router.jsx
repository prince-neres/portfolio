import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './pages/Base';
import Home from './pages/Home';
import Skills from './pages/Skills'
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base />} >
          <Route index element={<Home />} />
					<Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Experience />} />
					<Route path='/education' element={<Education />} />
					<Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
