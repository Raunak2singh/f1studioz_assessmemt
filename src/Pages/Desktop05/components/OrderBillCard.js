import React from 'react'
import CardBody from './CardBody'


const BillData = ({title,res})=>{
    return (<div style={{display:"flex",flexDirection:"row",fontSize:"15px",fontWeight:500,color:"#2A292A"}}>
    <label>{title}</label>
    <span style={{flexGrow:1}} />
    <label>$ {res}</label>
    </div>      )}



function OrderBillCard({checkBox}) {
  return (
    <CardBody >
        <span style={{fontSize:"16px",color:"#34495E",fontWeight:500}}>Bill Summary</span>
        <div style={{display:"flex",flexDirection:"column",gap:"5px",paddingTop:"10px"}}>
            <BillData title={"Sub Total"}  res={"4500.00"} />
            <BillData title={"Energy Surcharge"}  res={"70.18"} />
            <BillData title={"Sales Tax"}  res={"490.93"} />
            <div style={{display:"flex",flexDirection:"row",fontSize:"20px",fontWeight:500,color:"#2A292A"}}>
            <label>Total</label>
            <span style={{flexGrow:1}} />
            <label>$ 5061.11</label>
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"20px",paddingTop:"20px"}}>
        <span style={{width:"100%",padding:"1px",background:"#DDDDDD"}} />
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"5px"}}>
            <input type={"checkbox"} className={checkBox}  />
            <label style={{fontSize:"15px",fontWeight:500,color:"#2A292A"}} >Apply Tax</label>
            </div>
            <span style={{color:"#8894A0"}}>
            (The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details.)
            </span>
        </div>
        </div>
    </CardBody>
  )
}

export default OrderBillCard