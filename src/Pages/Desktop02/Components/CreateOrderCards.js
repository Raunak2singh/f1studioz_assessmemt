import React from 'react'
import {Card } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'


function CreateOrderCards({path,title,desc,textResponsivedesc,textResponsiveTitle,CreateOrderCardsStyle}) {
  const navigate = useNavigate()
  
  return (
  
        <Card className={CreateOrderCardsStyle}
        onClick={()=>{navigate(path)}}
            >
            <Card.Body style={{display:"flex",alignItems:"center"}}>
              <div style={{display:"flex",flexDirection:"column"}}>
                  <span  className={textResponsiveTitle} style={{color:"#2A292A",fontWeight:600}}>{title}</span>
                  <span className={textResponsivedesc} style={{color:"#8894A0"}}>{desc}</span>
              </div>
              <span style={{flexGrow:1}}/>
              <ChevronRight size={"20px"}/>
            </Card.Body>
        </Card>
        
  )
}

export default CreateOrderCards