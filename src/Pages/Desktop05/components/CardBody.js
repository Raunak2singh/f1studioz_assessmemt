import React from 'react'
import { Card } from 'react-bootstrap'

function CardBody({children,className}) {
  return (
    <Card className={className}>
        <Card.Body style={{padding:"20px"}}>
            {children}
        </Card.Body>
    </Card>
  )
}

export default CardBody