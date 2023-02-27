import React from 'react'

function Logo() {
  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"5px"}}>
    <span
      style={{
        borderRadius: "100px",
        height: "40px",
        width: "40px",
        background: "#ED357E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        color: "white",
        fontWeight: 700,
      }}
      >
      f1
    </span>
    <span 
    style={{ 
      fontSize: "20px",
      color: "white",
      fontWeight: 700,}}>
    studioz
    </span>
    </div>
  )
}

export default Logo