import React from 'react'
import { Card, Col, Row, } from 'react-bootstrap'



function SecondMessureInputBody({title,option =[]}) {
  return (
    <Row style={{display:"flex",alignItems:"center"}}>
    <Col xl={5} lg={5} md={5} sm={6}  style={{textAlign:"left"}}>{title}</Col>
    <Col xl={7} lg={7} md={7} sm={6} style={{textAlign:"left"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"}}>
        <span>Width</span>
        <select style={{width:"100%",height:"44px",border:"1px solid #E4E4E4",padding:"0px 10px"}}>
        <option>8ft</option>
        </select>
        <select style={{width:"100%",height:"44px",border:"1px solid #E4E4E4",padding:"0px 10px"}}>
        <option>2 in.</option>
        </select>
        </div>

        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"}}>
        <span>height</span>
        <select style={{width:"100%",height:"44px",border:"1px solid #E4E4E4",padding:"0px 10px"}}>
        <option>6ft</option>
        </select>
        <select style={{width:"100%",height:"44px",border:"1px solid #E4E4E4",padding:"0px 10px"}}>
        <option>0 in.</option>
        </select>
        </div>
        
      </div>
      {/* <select style={{width:"100%",height:"44px",border:"1px solid #E4E4E4",padding:"0px 10px"}}>
        {option.map(a =>
        <option>{a}</option>
        )} 
      </select> */}
      </Col>
    </Row>
  )
}

export default SecondMessureInputBody