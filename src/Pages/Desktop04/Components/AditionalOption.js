import React from 'react'
import { Card, Col, Row, } from 'react-bootstrap'

const extraS =[
  "Extra Strut(s)","Spade Strap Hinge(s)", "14 GA Quiet Hinge", "Less Bottom Astragal"," Gold Bar Gurantee ( Select Dealers )", "Medallion Hardware Upgrade", "Light Seal Kit", 'Slide Lock Mounted at 54”', "2 Spear Lift Handles"
]


const Checkboxes = ({title}) =>{
  return ( 
  <span style={{display:'flex',alignItems:"center",gap:"5px"}}>
  <input type={"checkbox"} />
  <label>{title}</label>
  </span>)
}

function AditionalOption({title,option =[]}) {
  return (
    <Row style={{display:"flex"}}>
    <Col xl={5} lg={5} md={5} sm={6}  style={{textAlign:"left",position:"relative",top:"-5px"}}>{title}</Col>
    <Col xl={7} lg={7} md={7} sm={6} style={{display:"flex",flexDirection:"row",textAlign:"left"}}>
    <div  style={{fontSize:"12px"}}>
      {extraS.map((a,i)=><Checkboxes title={a} key={i}/>)}
    </div>
    <div style={{width:"40%"}}>
     <select style={{width:"100%",height:"44px",border:"1px solid #E4E4E4",padding:"0px 10px"}}>
      {extraS.map((a,i)=>
      <option key={i}>{a}</option>  
      )}
      </select>
      </div>
      
      </Col>
    </Row>
  )
}

export default AditionalOption