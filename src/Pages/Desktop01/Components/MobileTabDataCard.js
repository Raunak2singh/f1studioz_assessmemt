import React from 'react'
import { Card } from 'react-bootstrap'
import CustomBadge from '../../CoreComponent/CustomBadge'

function MobileTabDataCard({GroupName,PO,Productintr,Expiry,Shared}) {
  return (
    <Card>
        <Card.Body style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{display:"flex",flexDirection:"row",gap:"5px"}}>
                <span  style={{fontWeight:500,fontSize:"12px"}}>Group Name {" "}<span style={{color:'#34495E',fontWeight:500}} > #{GroupName}</span> </span>
                <span style={{flexGrow:1}}/>
                <span style={{fontWeight:600,fontSize:"12px"}}>{PO}</span>
            </div>
            <div style={{display:"flex"}}>
            <span style={{fontWeight:600,color:'#34495E'}}>{Productintr}</span>
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
            <span  style={{fontSize:"12px",fontWeight:500,color:(Expiry > 10)? "#8894A0" :"#E67E22"}}>Expires in {Expiry} days</span> 
            <span style={{fontSize:"12px",fontWeight:600,color:"#8894A0",padding:"0px 10px"}}>·</span> 
            <span style={{fontSize:"12px",fontWeight:600,paddingLeft:(Shared === 'Shared')?"10px":"0px"}}>{Shared}</span> 
            <span style={{flexGrow:1}}/>
            <CustomBadge text={"new"}/>
            </div>
        </Card.Body>
    </Card>
  )
}

export default MobileTabDataCard