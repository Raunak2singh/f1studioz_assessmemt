import React, { useState } from 'react'
import { Button, ButtonGroup, Card, Col, Container,Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function TopCard({topCardButtonsforTAb,topCardButtons,DesktopIncDecbtn,forMobileviewPrice,forMobileviewToken,TopCardRow,forHoverTop}) {
    const navigate = useNavigate()
    const [InC,setInc] = useState(1)

  const OnInc = () => {
    if(InC < 100){
      setInc(InC+ 1)}}
  
  const OnDec = () => {
      if(InC > 1){
        setInc(InC-1)}}

  return (
    <Card>
            <Card.Body>
                    <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
                      <span className='TopCard-Title' >10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE, 5TH GENERATION FINISH WALDER DOOR</span>  
                      <span style={{color:"#8894A0"}}>Job Name: Front door with glass  Change <a style={{color:"#66332B",fontWeight:500,textDecoration:"none"}} href={""}>Change</a></span>
                      <span style={{color:"#8894A0"}}>Product #CWD •  Garage Door</span>
                      <span style={{color:"#8894A0"}}>Availability: <span style={{color:"#17A85F",fontWeight:600}}>IN STOCK</span> <span style={{color:"#34495E"}}>(Available for Pickup)</span></span>
                      <Row className={TopCardRow}>
                        <Col className={DesktopIncDecbtn}>
                        <div className={"TopIncbtn"} style={{display:"flex",gap:"10px"}}>
                        <Button   onClick={OnDec} style={{borderRadius:"2px",border:"1px solid #8894A0",fontSize:"20px",background:"#EEEEEE",color:"#34495E",fontWeight:900,alignItems:'center',justifyContent:"center",width:"50px"}}>-</Button>
                        <input value={InC} onChange={()=>{}} style={{borderRadius:"2px",border:"1px solid #8894A0",fontSize:"20px",width:"70px",textAlign:"center"}} />
                        <Button   onClick={OnInc} style={{borderRadius:"2px",border:"1px solid #8894A0",fontSize:"20px",background:"#EEEEEE",color:"#34495E",fontWeight:900,alignItems:'center',justifyContent:"center",width:"50px"}}>+</Button>
                        </div> 
                        </Col>
                        <Col className={forMobileviewToken}>
                        <span style={{color:"#17A85F"}}>Standard Multiplier: .432</span><br/>
                        <span style={{color:"#17A85F"}}>Secondary Multipliers Applied</span><br/>
                        <span style={{color:"#66332B",fontWeight:500}}>Apply MPQ</span>
                        </Col>
                        <Col className={forMobileviewPrice} style={{textAlign:"right"}}>
                        <span style={{color:"#2A292A"}}>Net Price:<span style={{fontSize:"20px",fontWeight:700}}> $2400.00</span></span><br/>
                        <span style={{color:"#2A292A"}}>Unit Price: $1200.00</span><br/>
                        <span>View Price Details</span>
                        </Col>
                      </Row>
                      <div className={topCardButtons} >
                      <ButtonGroup  style={{width:"100%"}}>
                          <Button className={forHoverTop} onClick={()=>{navigate('/')}}  style={{color:"",background:"none",border:"1px solid #E4E4E4",borderRadius:"0px",padding:"10px",color:"#66332B",fontWeight:500,textTransform:"upperCase"}}>Favorites</Button>
                          <Button className={forHoverTop} onClick={()=>{navigate('/ConfigNewDoor2')}}  style={{color:"",background:"none",border:"1px solid #E4E4E4",borderRadius:"0px",padding:"10px",color:"#66332B",fontWeight:500,textTransform:"upperCase"}}>Edit</Button>
                          <Button className={forHoverTop} onClick={()=>{navigate('/')}}  style={{color:"",background:"none",border:"1px solid #E4E4E4",borderRadius:"0px",padding:"10px",color:"#66332B",fontWeight:500,textTransform:"upperCase"}}>Copy</Button>
                          <Button  className={forHoverTop} onClick={()=>{navigate('/')}} style={{color:"",background:"none",border:"1px solid #E4E4E4",borderRadius:"0px",padding:"10px",color:"#66332B",fontWeight:500,textTransform:"upperCase"}}>Delete</Button>
                      </ButtonGroup>
                      </div>
                      <div  className='bottomIncbtn' >
                        <Button style={{borderRadius:"2px",border:"1px solid #8894A0",fontSize:"20px",background:"#EEEEEE",color:"#34495E",fontWeight:900,alignItems:'center',justifyContent:"center",width:"50px"}}>-</Button>
                        <input value={1} onChange={()=>{}} style={{borderRadius:"2px",border:"1px solid #8894A0",fontSize:"20px",width:"70px",textAlign:"center"}} />
                        <Button style={{borderRadius:"2px",border:"1px solid #8894A0",fontSize:"20px",background:"#EEEEEE",color:"#34495E",fontWeight:900,alignItems:'center',justifyContent:"center",width:"50px"}}>+</Button>
                     </div> 
                    </div>
            </Card.Body>
           
            <div className={topCardButtonsforTAb}>
                       
                   <ButtonGroup style={{width:"100%"}}>
                          <Button className={forHoverTop} onClick={()=>{navigate('/')}}  style={{color:"",background:"none",border:"1px solid #E4E4E4",borderRadius:"0px",padding:"10px",color:"#66332B",fontWeight:500,textTransform:"upperCase"}}>Favorites</Button>
                          <Button  className={forHoverTop} onClick={()=>{navigate('/ConfigNewDoor2')}} style={{color:"",background:"none",border:"1px solid #E4E4E4",borderRadius:"0px",padding:"10px",color:"#66332B",fontWeight:500,textTransform:"upperCase"}}>Edit</Button>
                          <Button  className={forHoverTop} onClick={()=>{}} style={{color:"",background:"none",border:"1px solid #E4E4E4",borderRadius:"0px",padding:"10px",color:"#66332B",fontWeight:500,textTransform:"upperCase"}}>Copy</Button>
                          <Button  className={forHoverTop} onClick={()=>{navigate('/')}} style={{color:"",background:"none",border:"1px solid #E4E4E4",borderRadius:"0px",padding:"10px",color:"#66332B",fontWeight:500,textTransform:"upperCase"}}>Delete</Button>
                      </ButtonGroup>
            </div>
            
    </Card>
           
  )
}

export default TopCard