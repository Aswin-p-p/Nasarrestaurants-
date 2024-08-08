import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Aboutus from './Components/Pages/Aboutus/Aboutus';
import Contact from './Components/Pages/Contact/Contact';
import Gallery from './Components/Pages/Gallery/Gallery';
import News from './Components/Pages/News/News';
import Menu from './Components/Pages/Menu/Menu';
function App() {
  return (
   <>
      <BrowserRouter>          
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/news' element={<News />} />
            <Route path='/menu' element={<Menu />} />
            </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
