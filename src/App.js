import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Aboutus from './Components/Pages/Aboutus/Aboutus';
import Contact from './Components/Pages/Contact/Contact';
import Gallery from './Components/Pages/Gallery/Gallery';
import News from './Components/Pages/News/News';
import Menu from './Components/Pages/Menu/Menu';
import { useEffect, useState } from 'react';
import Loader from './Components/ReusableComponent/Loader/Loader';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      // Home page: Loader works for 3 seconds
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Other pages: Loader depends on network speed
      const startLoading = () => setLoading(true);
      const endLoading = () => setLoading(false);

      window.addEventListener('beforeunload', startLoading);
      window.addEventListener('load', endLoading);

      return () => {
        window.removeEventListener('beforeunload', startLoading);
        window.removeEventListener('load', endLoading);
      };
    }
  }, [location.pathname]);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutus' element={<Aboutus />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/news' element={<News />} />
      <Route path='/menu' element={<Menu />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
