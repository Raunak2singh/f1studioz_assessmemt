import React, { useEffect, useState } from 'react'
import Appbar from './components/Navbar';

function NavHeader({children}) {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScroll(Math.floor(position));
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  return (
    <div style={{
        position:(scroll > 10 )?"fixed":"initial",
        width:"100%",
        zIndex:99,
        transition:"5s"
      }}>
     <Appbar/>
      {children}
      </div> 
  )
}

export default NavHeader