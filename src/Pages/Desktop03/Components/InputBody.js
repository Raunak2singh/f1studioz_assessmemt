import React from 'react'
import { Card, Col, Row, } from 'react-bootstrap'



function InputBody({title,option =[]}) {
  return (
    <Row style={{display:"flex",alignItems:"center"}}>
    <Col xl={5} lg={5} md={5} sm={6}  style={{textAlign:"left"}}>{title}</Col>
    <Col xl={7} lg={7} md={7} sm={6} style={{textAlign:"left"}}>
      <select style={{width:"100%",height:"44px",border:"1px solid #E4E4E4",padding:"0px 10px"}}>
        {option.map((a,i) =>
        <option key={i}>{a}</option>
        )} 
      </select></Col>
    </Row>
  )
}

export default InputBody