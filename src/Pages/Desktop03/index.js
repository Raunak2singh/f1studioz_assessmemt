import React from 'react'
import Header from '../CoreComponent/Header';
import { Button, Card, Container } from 'react-bootstrap';
import ConfigNewDoorCard from './Components/ConfigNewDoorCard';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../CoreComponent/NavHeader';
import InputBody from './Components/InputBody';
import "./ThirdDesktop.scss"


function ThirdDesktop() {
  const navigate = useNavigate()
  
  return (
    <div  style={{minHeight:"100vh",background:"#EEF0F6"}}>
        <NavHeader>
          <Header pageNumber={"2 of 3"} title="Create a new order" path="/CreateOrder" />
        </NavHeader>
        <Container>
        <div style={{padding:"16px 0px",display:"flex",justifyContent:"center",width:"100%"}}>
        <ConfigNewDoorCard  Cardclass="Cardclass" CardBodyClass="CardBodyClass">
          <InputBody  title={"Select Category"} option={["Residential Door","Residential Door"]}/>
          <InputBody  title={"Select Series"} option={["Canyon Ridge® Collection","Canyon Ridge® Collection"]}/>
          <InputBody  title={"Door Type"} option={["CAN212","CAN212"]}/>
        </ConfigNewDoorCard>
        </div>
        </Container>
        <div style={{position:"fixed",bottom:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
        <Card style={{height:"64px",width:"928px"}}>
          <Card.Body style={{display:"flex",flexDirection:"row"}}>
              <span style={{flexGrow:1}} />
              <button className='ConfigureBtn'   onClick={()=>{navigate('/confignewDoorpage2')}}>
                <span>Configure</span>
              </button>   
          </Card.Body>
      
        </Card>
        </div>
    </div>
  )
}

export default ThirdDesktop