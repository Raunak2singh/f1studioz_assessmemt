import React from "react";
import { Button } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import "./FaviComButton.scss"

function FaviConButton({onClick}) {
  return (
    <div
    className="FaviconCss"
   >
      <Button
      
        style={{
          height: "55px",
          width: "55px",
          borderRadius: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#66332B",
          border: "none",
          boxShadow: "0px 5px 7px 1px rgba(0,0,0,0.5  )",
        }}
        onClick={onClick}
      >
        <Plus size={"50px"} />
      </Button>
    </div>
  );
}

export default FaviConButton;
