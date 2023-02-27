import React ,{useContext}from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Filter, Search } from "react-bootstrap-icons";
import IconButton from "../../CoreComponent/IconButton";
import { StoreContext } from "../../../Context/StoreContext";


function TableSectionChanger({data,className,ButtonClassName}) {
  const {BottomChange,setBottomChange,setSearch,OnSearch} = useContext(StoreContext);
  
  return (
    <div className={className}>
      <ButtonGroup style={{ height:"77px",}}>
        {data.map((a,i) => (
          <Button
          key={i}
            className={ButtonClassName}
            style={{
              color:"#34495E",
              background: "none",
              border: "none",
              borderBottom: (a === data[BottomChange] )?"3px solid #34495E":"0px",
              borderRadius: "0px",
              // width:"186px",
              zIndex:0,
              textTransform:"capitalize",
              fontSize:"16px",
              fontWeight:700,
            }}
            onClick={()=>{setBottomChange(i)}}
          >
            {a}
          </Button>
        ))}
      </ButtonGroup>
      <span style={{flexGrow:1}} />
      <div  style={{display:"flex",background:"white",border:"1px solid #E4E4E4",borderRadius:"2px"}}>
      <input placeholder="Search"  onChange={(e)=>{setSearch(e.target.value)}}  style={{border:"none",padding:"10px",background:"none" ,maxWidth:"100px"}}/>
      <IconButton onClick={OnSearch}  icon={<Search/>}/>
      </div>
      <span  style={{padding:"0px 5px"}}/>
      <div  onClick={()=>{}} style={{width:"100px",display:"flex",flexDirection:"row",background:"white",justifyContent:"center",alignItems:"center",border:"1px solid #E4E4E4",borderRadius:"2px"}}>
      <IconButton  icon={<Filter/>}/>
      <div style={{padding:"10px"}}>Filter</div>
      </div>

      
    
    </div>
  );
}

export default TableSectionChanger;
