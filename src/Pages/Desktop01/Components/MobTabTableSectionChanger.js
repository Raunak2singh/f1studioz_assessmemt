import React, { useContext } from 'react'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap'
import { FileX, Filter, Search } from 'react-bootstrap-icons'
import IconButton from '../../CoreComponent/IconButton'
import { StoreContext } from '../../../Context/StoreContext';





function MobTabTableSectionChanger({TabclassName,MobclassName}) {
    const { BottomChange,setBottomChange} = useContext(StoreContext);
  return (
    <Container fluid style={{padding:"34px 10px"}}>
        
        <div className={TabclassName}>
        <Row >
            <Col xs={2} style={{textAlign:"left"}}><span style={{fontSize:"20px"}}>Carts</span></Col>
            <Col xs={8} style={{textAlign:"center"}}>
            <ButtonGroup style={{display:"flex"}}>
                    <Button onClick={()=>{setBottomChange(0)}} style={{padding:"10px",borderRadius:"3px",width:"100%",background:(BottomChange === 0)?"#DDEDFD" :"#ffffff",color:"#34495E",fontWeight:600,border:"1px solid #E4E4E4"}}>Active{` (${12})`}</Button>
                    <Button onClick={()=>{setBottomChange(1)}} style={{padding:"10px",borderRadius:"3px",width:"100%",background:(BottomChange === 1)?"#DDEDFD" :"#ffffff",color:"#8894A0",fontWeight:600,border:"1px solid #E4E4E4"}}>Archive{` (${3})`}</Button>
                </ButtonGroup>
            </Col>
            <Col xs={2} style={{display:"flex",alignItems:"center",justifyContent:"right",gap:"1px"}}>
                <IconButton icon={<Search/>} />
                <IconButton icon={<Filter/>} />
            </Col>
        </Row>
        </div>
        <div className={MobclassName}>
            <Row>
                <Col xs={6} style={{textAlign:"left"}}><span style={{fontSize:"20px"}}>Carts</span></Col>
                <Col xs={6} style={{display:"flex",alignItems:"center",justifyContent:"right",gap:"1px"}}>
                <IconButton icon={<Search/>} />
                <IconButton icon={<Filter/>} />
                 </Col>
            </Row>
                <ButtonGroup style={{display:"flex"}}>
                    <Button onClick={()=>{setBottomChange(0)}} style={{padding:"10px",borderRadius:"3px",width:"100%",background:(BottomChange === 0)?"#DDEDFD" :"#ffffff",color:"#34495E",fontWeight:600,border:"1px solid #E4E4E4"}}>Active{` (${12})`}</Button>
                    <Button onClick={()=>{setBottomChange(1)}} style={{padding:"10px",borderRadius:"3px",width:"100%",background:(BottomChange === 1)?"#DDEDFD" :"#ffffff",color:"#8894A0",fontWeight:600,border:"1px solid #E4E4E4"}}>Archive{` (${3})`}</Button>
                </ButtonGroup>
        </div>

       
     
    </Container>
  )
}

export default MobTabTableSectionChanger