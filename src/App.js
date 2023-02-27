import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";

// import ConfigNewDoor from "./Pages/ConfigNewDoor";
// import ConfigNewDoorSecond from "./Pages/ConfigNewDoor2";
// import AddtoCart from "./Pages/AddtoCart";
import MainDesktop from './Pages/Desktop01';
import SecondDesktop from './Pages/Desktop02';
import ThirdDesktop from './Pages/Desktop03';
import ForthDesktop from './Pages/Desktop04';
import Orderd from './Pages/Desktop05/Orderd';





function App() {

  return (


      <Routes>
      <Route path="/"  element={<MainDesktop/>}/>
    <Route path="/AddOrder"  element={<SecondDesktop/>}/>
        <Route path="/confignewDoorpage1"  element={<ThirdDesktop/>}/>
        <Route path="/confignewDoorpage2"  element={<ForthDesktop/>}/>
     <Route path="/Orderd"  element={<Orderd/>}/>
     
      </Routes>

   
     
  );
}

export default App;
