import React ,{useState,useEffect,useContext}from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { StoreContext } from "../../../Context/StoreContext";

const sections = ["Charts", "Favorites"];

function SectionChanger({data,onClick}) {
 const {TopChange,setTopChange} = useContext(StoreContext);

  return (
    <div
      style={{
        minHeight:"48px",
        background:"#34495E",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
      }}
    >
      <ButtonGroup style={{ height: "48px",}}>
        {data.map((a,i) => (
          <Button
          key={i}
            style={{
              color:"#FFFFFF",
              background: "none",
              border: "none",
              borderBottom:(a === sections[TopChange])?"3px solid #FACA30":  "0px",
              borderRadius: "0px",
              width:"140px",
              textTransform:"uppercase",
              fontSize:"14px",
              fontWeight:700,
            }}
            onClick={()=>{setTopChange(i)}}
          >
            {a}
          </Button>
        ))}
      </ButtonGroup>
    
    </div>
  );
}

export default SectionChanger;
