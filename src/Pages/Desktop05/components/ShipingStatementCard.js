import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import CardBody from './CardBody'

function ShipingStatementCard() {
  return (
    <CardBody >
        <Row style={{justifyContent:"center"}}>
            <Col lg={5}>
                <Card  style={{border:"none"}}>
                <span style={{fontSize:"16px",color:"#34495E",fontWeight:500}}>Billing to</span>
                    <Row>
                        <Col  lg={9}sm={6} xs={8}  style={{display:"flex",flexDirection:"column",gap:"3px"}}>
                            <span style={{color:"#2A292A",fontWeight:500,fontSize:"15px"}}>Bement Jared</span>
                            <span>144 Curt Shores, 50, Madison Avenue Hixson - 42040</span>
                            <span>Contact: (123) 456 7890</span>
                        </Col>
                        <Col lg={3} sm={6} xs={4} style={{textAlign:"right"}}><a style={{color:"#66332B",textTransform:"uppercase",textDecoration:"none",fontWeight:500}} href="/">Change</a></Col>
                    </Row>
                </Card>
            </Col>
            
            <Col xs={2}  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={{height:"50%",width:"1px",padding:"1px",background:"#D1D1D1"}}/>
            </Col>
      
            <Col lg={5}>
                <Card  style={{border:"none",paddingTop:"10px"}}>
                <span style={{fontSize:"16px",color:"#34495E",fontWeight:500}}>Shipping To</span>
                    <Row >
                        <Col lg={9} sm={6}  xs={8} style={{display:"flex",flexDirection:"column",gap:"3px"}}>
                        <span style={{color:"#2A292A",fontWeight:500,fontSize:"15px"}}>Bement Jared</span>
                        <span>144 Curt Shores, 50, Madison Avenue Hixson - 42040</span>
                        <span>Contact: (123) 456 7890</span>
                        </Col>
                        <Col lg={3} sm={6} xs={4} style={{textAlign:"right"}}><a style={{color:"#66332B",textTransform:"uppercase",textDecoration:"none",fontWeight:500}} href="/">Change</a></Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </CardBody>
  )
}

export default ShipingStatementCard