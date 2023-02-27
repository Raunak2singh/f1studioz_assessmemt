import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function ConfigNewDoorCard({
  children,
  Cardclass,
  CardBodyClass,
  needHeader,
  headerTitle,
}) {
  return (
    <Card className={Cardclass} style={{minHeight:"100vh"}} >
      {(needHeader) ? <Card.Header>{headerTitle}</Card.Header> : ""}
      <Card.Body>
        <div className={CardBodyClass}>
          {children}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ConfigNewDoorCard;
