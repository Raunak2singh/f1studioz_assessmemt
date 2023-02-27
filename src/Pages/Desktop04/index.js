import React ,{useState}from 'react'
import Header from '../CoreComponent/Header';
import { Button, Card, Container, ProgressBar, Stack } from 'react-bootstrap';
import SecondConfigNewDoorCard from './Components/SecondConfigNewDoorCard';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../CoreComponent/NavHeader';
import SecondInputBody from './Components/SecondInputBody';
import './ForthDesktop.scss'
import SecondMessureInputBody from './Components/SecondMessureInputBody';
import AditionalOption from './Components/AditionalOption';
import Misc from './Components/Misc';


function ForthDesktop() {
  const navigate = useNavigate()
  
  
  return (
    <div  style={{minHeight:"100vh",background:"#EEF0F6"}}>
        <NavHeader>
          <Header pageNumber={"2 of 3"} title="Create a new order" path="/configNewDoor" />
        </NavHeader>
        <Container>

        <div style={{textAlign:"center",padding:"30px 0px",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
          <span className='progressBarRes' >
        <ProgressBar  variant="success" style={{height:"8px",background:"#D8D8D8"}}  now={25} />
          </span>
        <span style={{fontWeight:"bold",color:"#34495E"}}>25%  <span style={{fontWeight:400}}>Completed</span></span>
       
          
        </div>
        <div style={{padding:"16px 0px",paddingBottom:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",gap:"18px"}}>
      
        <SecondConfigNewDoorCard  needHeader headerTitle={"Layout options"} Cardclass="Cardclass" CardBodyClass="CardBodyClass">
          <SecondInputBody  title={"Assembly Type"} option={["Complete Door","Complete Door"]}/>
          <SecondMessureInputBody title={"Measure Size"} />
         <SecondInputBody  title={"Windcode"} option={["WindCode W1","WindCode W1"]}/>
          <SecondInputBody  title={"Design"} option={["CC","CC"]}/>
          <SecondInputBody  title={"Color"} option={["Dark Finish","Dark Finish"]}/>
        </SecondConfigNewDoorCard>
        <SecondConfigNewDoorCard  needHeader headerTitle={"Window Options"} Cardclass="Cardclass" CardBodyClass="CardBodyClass">
          <SecondInputBody  title={"Glass Type"} option={["Solid (No Windows)","Solid (No Windows)"]}/>
          <SecondInputBody  title={"Section(s) Glazed"} option={["Sections 4","Sections 4"]}/>
          <SecondInputBody  title={"Framing"} option={["Arch 1 Design","Arch 1 Design"]}/>
        </SecondConfigNewDoorCard>
        <SecondConfigNewDoorCard  needHeader headerTitle={"Track Options"} Cardclass="Cardclass" CardBodyClass="CardBodyClass">
          <SecondInputBody  title={"Spring"} option={["Galvanized Torsion","Galvanized Torsion"]}/>
          <SecondInputBody  title={"Track Size"} option={["2” Flag & Jamb Brackets Loose","2” Flag & Jamb Brackets Loose"]}/>
          <SecondInputBody  title={"Track Mount"} option={["Bracket","Bracket"]}/>
          <SecondInputBody  title={"Track Lift"} option={["Standard"]}/>
          <SecondInputBody  title={"Track Radius"} option={["12” Radius"]}/>
        </SecondConfigNewDoorCard>
        <SecondConfigNewDoorCard needHeader headerTitle={"Other options"} Cardclass="Cardclass" CardBodyClass="CardBodyClass">
          <SecondInputBody  title={"Lock"} option={["Inside Slide Lock (#2)"]}/>
          <Misc title={"MISC Lock Options"}/>
          <SecondInputBody  title={"Packaging"} option={["[x] Distributor"]}/>
          <AditionalOption title={"Additional Options"} />
        </SecondConfigNewDoorCard>
        </div>
        </Container>
        <div style={{position:"fixed",bottom:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
        <Card style={{height:"64px",width:"928px"}}>


          <Card.Body style={{display:"flex",flexDirection:"row",gap:"10px"}}>
           
              <span style={{flexGrow:1}} />
              <button className='PreviewBtn' onClick={()=>{}}>
                <span>Preview</span>
              </button>
              <button className='ConfigureBtn' style={{background:"#66332B"}}  onClick={()=>{navigate('/Orderd')}}>
                <span>Add to Cart</span>
              </button>   
          </Card.Body>
      
        </Card>
        </div>
    </div>
  )
}

export default ForthDesktop