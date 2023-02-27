import React from 'react'
import {  Button, Table } from 'react-bootstrap'
import { ArrowDown } from 'react-bootstrap-icons'
import CustomBadge from '../../CoreComponent/CustomBadge'

const TableHeaders = ["product Information", "Cart name", "Shipping Point","Created by", "expiry"]

function ProductTable({productData}) {
  return (
    <div style={{margin:"16px 0px"}}>
        <Table  hover responsive >
            <thead >
                <tr  style={{background:"white"}} >
                    {TableHeaders.map((a,i)=>
                    <th style={{padding:"10px 20px"}} key={i}>
                    <div style={{display:"flex",alignItems:"center",textTransform:"uppercase",fontSize:"12px",color:"#8894A0"}}>
                    {a}
                    <Button style={{background:"none",border:"none",color:"#000000",borderRadius:"100px"}}>
                    <ArrowDown style={{fontSize:"12px",fontWeight:800}}/>
                    </Button>
                    </div>
                    </th>
                    
                    )} 
                </tr>
            </thead>
            
            <tbody>
                
                     {productData.map((a,i)=>
                    <tr key={i} style={{background:(i%2 === 0 )?"#EEEEEE":"#ffffff",padding:"0px 20px"}}>
                        <td style={{fontWeight:700,padding:"20px 20px",fontSize:"14px",color:"#212931"}}>{a.ProductInfo}</td>
                        <td style={{fontWeight:500,padding:"20px 20px",fontSize:"14px",color:"#212931"}}>{a.CartName}</td>
                        <td style={{fontWeight:500,padding:"20px 20px",fontSize:"14px",color:"#212931"}}>{a.ShippingPoint}</td>
                        <td style={{fontWeight:500,padding:"20px 20px",fontSize:"14px",color:"#212931"}}>{a.createBy}</td>
                        <td style={{fontWeight:500,padding:"20px 20px",fontSize:"14px",color:(a.Expiry < 10)?"#E67E22":"#8894A0"}}>Expiry in {a.Expiry} days  
                        {(a.Expiry > 10)?
                       <CustomBadge  text={"new"}/>
                        :""}</td>
                    </tr>)}    
            </tbody>
        </Table>
        {
            (productData.length === 0)?
            <div style={{display:"flex",minHeight:"50vh",justifyContent:"center",alignItems:"center",fontSize:"20px",fontWeight:800,color:"silver"}}>
               NO DATA
        </div>:""
        }
    </div>
  )
}

export default ProductTable