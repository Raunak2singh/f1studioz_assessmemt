import React from "react";

function CustomBadge({text}) {
  return (
    <span
      style={{
        marginLeft: "5px",
        padding: "2px 10px",
        borderRadius: "100px",
        textAlign: "center",
        height: "fit-content",
        textTransform: "uppercase",
        color: "#17A85F",
        background: "#A8E7C7",
        fontSize: "10px",
      }}
    >
      {text}
    </span>
  );
}

export default CustomBadge;
