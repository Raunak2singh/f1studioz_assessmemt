import React from 'react'
import CustomBody from '../CoreComponent/CustomBody'
import NavHeader from '../CoreComponent/NavHeader'
import Header from '../CoreComponent/Header'
import { Button, ButtonGroup, Card, Col, Container,Row } from 'react-bootstrap'
import TopCard from './components/TopCard'
import CardBody from './components/CardBody'
import CenterInputCard from './components/CenterInputCard'
import OrderBillCard from './components/OrderBillCard'
import ShipingStatementCard from './components/ShipingStatementCard'
import "./Orderd.scss"
import { useNavigate } from 'react-router-dom'
import { PlusSquareFill } from 'react-bootstrap-icons'


function Orderd() {
   const navigate = useNavigate()

  return (
    <CustomBody >
        <NavHeader> 
              <Header  title={"Classic_John45012"} pageNumber="Cart #123456723" path={'/'}/>
        </NavHeader>
        <Container  className='MainContainer'>
          <div className='mainBody' >
            <TopCard topCardButtonsforTAb={"topCardButtonsforTAb"}
             forMobileviewPrice={"forMobileviewPrice"}
             forMobileviewToken={"forMobileviewToken"} 
            topCardButtons={"topCardButtons"} 
            DesktopIncDecbtn={"DesktopIncDecbtn"}
            TopCardRow={"TopCardRow"}
            />
            
            <Row className={"centerCardRow"} >
              <Col lg={6} sm={12} style={{display:"flex",gap:"10px",flexDirection:"column"}} >
                <CenterInputCard className={"centerCardFlex"} date inputDatePicker={"inputDatePicker"}/>
                <CenterInputCard className={"centerCardFlex"}   inputDatePicker={"inputDatePicker"}/>
              </Col>

              <Col lg={6} sm={12}>
                
                <OrderBillCard checkBox={"checkBox"}/>
                
              </Col>
            </Row>
            <ShipingStatementCard/>
          </div>
          
        </Container>
        
        <div style={{position:"fixed",bottom:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
          
        <Card style={{ display:"flex",flexDirection:"row",height:"64px",width:"928px"}}>
          <Card.Body className="rate">
              <span  >
              <span>1 Item</span>
              <span style={{fontSize:"20px",fontWeight:500}}>$ 5061.11</span>
            </span>
          </Card.Body>
          <Card.Body style={{display:"flex",flexDirection:"row",gap:"10px"}}>
           
              <span style={{flexGrow:1}} />
              <button className='PreviewBtn' style={{display:"flex",alignItems:'center',justifyContent:'center',gap:"10px",background:"#ffffff",color:"#66332B"}} onClick={()=>{navigate('/CreateOrder')}}>
                <PlusSquareFill style={{color:"#66332B"}}/>
                <span>Add More</span>
              </button>
              <button className='ConfigureBtn' onClick={()=>{navigate('/')}}>
                <span>Place Order</span>
              </button>   
          </Card.Body>
      
        </Card>
        </div>
    </CustomBody>
  )
}

export default Orderd