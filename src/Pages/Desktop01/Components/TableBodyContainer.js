import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ProductTable from './ProductTable';
import TableSectionChanger from './TableSectionChanger';


const sections = ["Active Charts", "Archived Charts"];


function TableBodyContainer({children,className}) {
  
  return (
    <Container fluid className={className}>
        {children}
    </Container>
  )
}

export default TableBodyContainer