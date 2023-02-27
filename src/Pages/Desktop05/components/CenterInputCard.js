import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardBody from './CardBody'

function CenterInputCard({date,className,inputDatePicker}) {
  return (
    <CardBody className={className}>
    <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
    <label  style={{color:"#34495E"}}>Change Delivery Date</label>
    {date?
    <Row style={{alignItems:"center",gap:"10px"}}>
      <Col lg={12} sm={6}>
    <input type={"date"}  className={inputDatePicker}/> 
      </Col>
      <Col lg={12} sm={6}>
    <span style={{color:"#34495E"}}>Standard Delivery: Tue May 28 - 2019</span>
      </Col>
    </Row>
    :<Row style={{alignItems:"center",gap:"10px"}}>
      <Col lg={12} sm={6}>
    <input type={"text"} placeholder="Enter PO Number"  className={inputDatePicker}  />
      </Col>
      <Col lg={12} sm={6}>
    <span style={{color:"#34495E"}}>Standard Delivery: Tue May 28 - 2019</span>
      </Col>
    </Row>
    }
    </div>
  </CardBody>
  )
}

export default CenterInputCard