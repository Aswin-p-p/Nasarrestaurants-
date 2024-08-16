import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Aboutus from './Components/Pages/Aboutus/Aboutus';
import Contact from './Components/Pages/Contact/Contact';
import Gallery from './Components/Pages/Gallery/Gallery';
import News from './Components/Pages/News/News';
import Menu from './Components/Pages/Menu/Menu';
import { useEffect, useState } from 'react';
import Loader from './Components/ReusableComponent/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const handleStart = () => {
  //     setLoading(true);
  //   };

  //   const handleEnd = () => {
  //     setLoading(false);
  //   };

  //   const startLoading = () => {
  //     handleStart();
  //   };

  //   const endLoading = () => {
  //     handleEnd();
  //   };

  //   window.addEventListener('beforeunload', startLoading);
  //   window.addEventListener('load', endLoading);

  //   return () => {
  //     window.removeEventListener('beforeunload', startLoading);
  //     window.removeEventListener('load', endLoading);
  //   };
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
   <>
     {/* {loading ? (
        <Loader />
      ) : ( */}
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
        {/* )} */}
   </>
  );
}

export default App;
