import React from 'react'
import { Card, Col, Row, } from 'react-bootstrap'



function Misc({title,option =[]}) {
  return (
    <Row style={{display:"flex",alignItems:"center"}}>
    <Col xl={5} lg={5} md={5} sm={6}  style={{textAlign:"left"}}>{title}</Col>
    <Col xl={7} lg={7} md={7} sm={6} style={{textAlign:"left",display:"flex",gap:"20px"}}>
    <input type={"radio"}/><label>No Lock Hole</label>
    </Col>
    </Row>
  )
}

export default Misc