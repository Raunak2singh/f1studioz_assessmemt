import React from 'react'
import { Button } from 'react-bootstrap'

function IconButton({icon,size,background="none",onClick}) {
  return (
    <Button onClick={onClick} style={{
        display:"flex",
        justifyContent:"center",
        background:background,
        alignItems:"center",
        border:"none",
        color:"#66332B",
        borderRadius:"100px",fontSize:"25px",fontWeight:900,justifyContent:"center"}}>{icon}</Button>
  )
}

export default IconButton