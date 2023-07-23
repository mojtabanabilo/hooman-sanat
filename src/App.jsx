import React, {useState, useEffect} from 'react';
import "./App.scss";

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import StickyHeader from './components/sticky-header/StickyHeader';
import HamburgerMenu from './components/menu/HamburgerMenu';

const App = () => {
  const [scrollY, setScrollY] = useState(null);
  const [screenSize, setScreenSize] = useState(null);
  const [menu, setMenu] = useState(false);


  useEffect(() => {
    const handleScrollY = () => setScrollY(window.scrollY);
    const handleScreenSize = () => setScreenSize(window.innerWidth);

    window.addEventListener("scroll", handleScrollY);
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
      window.removeEventListener("resize", handleScreenSize)
    }
  }, [])

  return (
    <div className='app-container'>
      <Header userSize={{screenSize, setScreenSize}} userMenu={{menu, setMenu}}/>
      {menu && screenSize < 867 && <HamburgerMenu userMenu={{menu, setMenu}}/>}
      {scrollY > 110 && <StickyHeader />}
      {/* <Footer /> */}
    </div>
  );
};

export default App;