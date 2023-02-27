import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function SecondConfigNewDoorCard({
  children,
  Cardclass,
  CardBodyClass,
  needHeader,
  headerTitle,
  onClick
}) {
  return (
    <Card onClick={onClick} className={Cardclass} style={{ boxShadow:"0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1)",border:"none"}}>
      {(needHeader) ? <Card.Header style={{background:"#E4E4E4",color:"#34495E",fontWeight:500}}>{headerTitle}</Card.Header> : ""}
      <Card.Body>
        <div className={CardBodyClass}>
          {children}
        </div>
      </Card.Body>
    </Card>
  );
}

export default SecondConfigNewDoorCard;
