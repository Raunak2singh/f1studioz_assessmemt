import React from "react";
import Header from "../CoreComponent/Header"
import CreateOrderCards from "./Components/CreateOrderCards";
import { Container, Navbar, Stack } from "react-bootstrap";
import NavHeader from "../CoreComponent/NavHeader";
import CustomBody from "../CoreComponent/CustomBody";
import "./SecondDesktop.scss"

const CreateOrderData = [
  { 
    title:"Configure your door from scratch",
    desc:"Residential, Commerical, Entry doors",
    path:"/confignewDoorpage1"
  },
  { 
    title:"Parts / Openers",
    desc:"Order Parts and Openers",
    path:"/"
  },
  { 
    title:"Direct Item Entry",
    desc:"Order Parts / Openers using a Product ID",
    path:"/"
  },
  { 
    title:"Choose from favourites",
    desc:"Re-order door from your favourites ",
    path:"/"
  }
  
]

function SecondDesktop() {
  return (
    <CustomBody>
      <NavHeader>
        <Header title="Create a new order" path="/AddOrder" />
      </NavHeader>
      <Container>
      
        <div className="cardBody">
          {CreateOrderData.map((a,i)=>
          <div
          key={i}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
            <CreateOrderCards CreateOrderCardsStyle="CreateOrderCardsStyle" textResponsiveTitle={"textResponsiveTitle"} textResponsivedesc={"textResponsivedesc"} title={a.title} desc={a.desc} path={a.path} />
          </div> 
            )}
        </div>
      </Container>
    </CustomBody>
  );
}

export default SecondDesktop;
