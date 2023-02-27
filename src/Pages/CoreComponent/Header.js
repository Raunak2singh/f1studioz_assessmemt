import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft, Arrowleft, ThreeDotsVertical } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./Header.scss"

function Header({ title ,path,pageNumber}) {
    const navigate = useNavigate()
  return (
    <div
      style={{
        zIndex:1,
        minHeight: "48px",
        background: "#34495E",
        display: "flex",
        alignItems: "center",

      }}
    >
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100px",
          background: "none",
          border: "none",
        }}
        onClick={()=>{ navigate(path)}}
      >
        <ArrowLeft fontWeight={800} fontSize="20px" />
      </Button>

      <span  className="FlexDesktop" style={{ fontSize: "15px", color: "white" }}>{title}</span>
      <span className="FlexDesktop" style={{color:"#E4E4E4",padding:"2px 20px"}}>{pageNumber}</span>

      <div className="FlexMob" style={{flexDirection:"column",alignItems:"flex-start",textAlign:"left"}}>
      <span style={{ fontSize: "15px", color: "white" }}>{title}</span>
      <span style={{color:"#E4E4E4"}}>{pageNumber}</span>
      </div>
      <span style={{ flexGrow: 1 }} />
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100px",
          background: "none",
          border: "none",
        }}
      >
        <ThreeDotsVertical fontWeight={800} fontSize="20px" />
      </Button>
    </div>
  );
}

export default Header;
