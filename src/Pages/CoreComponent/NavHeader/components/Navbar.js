import React, { useEffect, useState } from 'react'
import {  Navbar } from "react-bootstrap";
import { BellFill, Grid3x3GapFill, List, QuestionCircleFill } from 'react-bootstrap-icons';
import Avtar from '../../Avtar';
import Logo from '../../Logo';
import './Navbar.scss'


function Appbar({scroll}) {

  return (
    <Navbar className='Navbar' style={{padding:"11px 20px"}} >
    <Logo/>
    <span style={{flexGrow:1}}/>
    <Grid3x3GapFill color='#525960' size={"18px"}  />
    <BellFill color='#525960' size={"18px"}  />
    <div className="avatrAndQuestinIcon">
    <QuestionCircleFill color='#525960' size={"18px"}  />
    <Avtar/>
    </div>
    <div className='MobileBar'>
      <List color='#525960' size={"18px"}/>
    </div>
  </Navbar>
  )
}

export default Appbar