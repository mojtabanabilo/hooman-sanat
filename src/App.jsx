import React, {useState, useEffect} from 'react';
import "./App.scss";

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import StickyHeader from './components/sticky-header/StickyHeader';

const App = () => {
  const [scrollY, setScrollY] = useState(null);

  useEffect(() => {
    const handleScrollY = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, [])

  return (
    <div className='app mw-100 mh-100 bg-danger position-relative'>
      <Header />
      {scrollY > 110 && <StickyHeader />}
      <Footer />
    </div>
  );
};

export default App;