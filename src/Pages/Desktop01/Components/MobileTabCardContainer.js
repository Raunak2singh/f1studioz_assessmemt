import React from 'react'
import { Container } from 'react-bootstrap'
import MobileTabDataCard from './MobileTabDataCard'


function MobileTabCardContainer({productData}) {
   
    return (
    <Container fluid style={{display:"flex",flexDirection:"column",gap:"20px"}}>
        {   productData && 
            productData.map((a,i)=>
                <MobileTabDataCard
                GroupName={a.CartName}
                PO={a.id}
                Productintr={a.ProductInfo}
                Expiry={a.Expiry}
                Shared={a.shared}
                key={i}
                />
             )
        }
       
       
    </Container>
  )
}

export default MobileTabCardContainer