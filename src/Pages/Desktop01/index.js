import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavHeader from "./../CoreComponent/NavHeader";
import SectionChanger from "./Components/SectionChanger";
import FaviConButton from "./../CoreComponent/FaviConButton";
import CustomBody from "./../CoreComponent/CustomBody";
import TableBodyContainer from "./Components/TableBodyContainer";
import ProductTable from "./Components/ProductTable";
import TableSectionChanger from "./Components/TableSectionChanger";
import MobTabTableSectionChanger from "./Components/MobTabTableSectionChanger";
import MobileTabCardContainer from "./Components/MobileTabCardContainer";
import { StoreContext } from "../../Context/StoreContext";
import "./MainDesktop.scss";

const Topsections = ["Charts", "Favorites"];
const Bottomsections = ["Active Carts", "Archived Carts"];
const productData = [
  {
    id: "#42521983",
    ProductInfo: "2 Classic Collection Garage Door, 2 Entry Door",
    CartName: "Johnson_Classic14209123",
    ShippingPoint: "Russia Plant",
    createBy: "Manoj Bajpayee",
    Expiry: 6,
    shared: "Created by Jhon",
  },
  {
    id: "#42521983",
    ProductInfo: "10' 0'' X 10' 0.0'' CAN211CCW1 COMPLETE DOOR INTELLICORE",
    CartName: "Carter_Classic14209123",
    ShippingPoint: "Russia Plant",
    createBy: "Steve Benneth...",
    Expiry: 4,
    shared: "Shared",
  },
  {
    id: "PO #70452444",
    ProductInfo:
      "Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®",
    CartName: "Michigan_Classic14209123",
    ShippingPoint: "ABC Plant",
    createBy: "Steve Benneth...",
    Expiry: 90,
    shared: "Created by Jhon",
  },
  {
    id: "PO #70452444",
    ProductInfo:
      "Hardware Special - Stock. W4.HB.8.0.7.0.None.Sol - WH.9.G.2J.B..S",
    CartName: "JohnDavid_Classic14209123",
    ShippingPoint: "Russia Plant",
    createBy: "Manhatton Cree...",
    Expiry: 90,
    shared: "Shared",
  },
  {
    id: "PO #70452444",
    ProductInfo: "8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE",
    CartName: "Chiristopher_Classic14209123",
    ShippingPoint: "ABC Plant",
    createBy: "Jamie Sunshine",
    Expiry: 5,
    shared: "Created by Jhon",
  },
  {
    id: "PO #70452444",
    ProductInfo: "8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE",
    CartName: "Johnson_Classic14209123",
    ShippingPoint: "Russia Plant",
    createBy: "Jonathon Peter",
    Expiry: 6,
    shared: "Shared",
  },
  {
    id: "PO #70452444",
    ProductInfo: "1 Classic Collection Garage Door, 1 Entry Door",
    CartName: "Johnson_Classic14209123",
    ShippingPoint: "Russia Plant",
    createBy: "Cristine Agape",
    Expiry: 90,
    shared: "Created by Jhon",
  },
  {
    id: "#70242444",
    ProductInfo: "2 Classic Collection Garage Door, 2 Entry Door",
    CartName: "Johnson_Classic14209123",
    ShippingPoint: "ABC Plant",
    createBy: "Cristine Agape",
    Expiry: 90,
    shared: "Created by Jhon",
  },
  {
    id: "#721132324",
    ProductInfo: "8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE",
    CartName: "Johnson_Classic14209123",
    ShippingPoint: "ABC Plant",
    createBy: "Cristine Agape",
    Expiry: 5,
    shared: "Shared",
  },
  {
    id: "#711132324",
    ProductInfo: "8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE",
    CartName: "Johnson_Classic14209123",
    ShippingPoint: "ABC Plant",
    createBy: "Casette Snowads",
    Expiry: 6,
    shared: "Created by Jhon",
  },
  {
    id: "#711132124",
    ProductInfo: "8’ 8’’ X 8’ 6’’ CAN211CCW1 Commercial DOOR INTELLICORE",
    CartName: "Johnson_Classic14209123",
    ShippingPoint: "Russia Plant",
    createBy: "Casette Snowads",
    Expiry: 3,
    shared: "Shared",
  },
];
function MainDesktop() {
  const navigate = useNavigate();
  const [TopChange, setTopChange] = useState(0);
  const [BottomChange, setBottomChange] = useState(0);
  const [Search, setSearch] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (productData) {
      setData(productData);
    }
  }, []);

  const OnSearch = () => {
    if (Search) {
      let k = [];

      k = productData.filter((a) => a.ProductInfo.includes(Search));
      console.log(k);
      setData(k);
    } else {
      setData(productData);
    }
  };



  return (
    <StoreContext.Provider
      value={{
        TopChange,
        setBottomChange,
        setTopChange,
        BottomChange,
        setSearch,
        OnSearch,

      }}
    >
      <CustomBody>
        <NavHeader>
          <SectionChanger data={Topsections} />
        </NavHeader>
        {!TopChange ? (
          <TableBodyContainer className="DesktopVeiw">
            <TableSectionChanger
              className="TableSectionChanger"
              ButtonClassName="TableButtonClassName"
              data={Bottomsections}
            />
            {!BottomChange ? (
              <ProductTable productData={data} />
            ) : (
              <div
                style={{
                  minHeight: "40vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1 style={{ color: "#D2D2D2" }}>No data</h1>
              </div>
            )}
          </TableBodyContainer>
        ) : (
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "#D2D2D2" }}>No data</h1>
          </div>
        )}

        <TableBodyContainer className="TabletmobileVeiw">
          <MobTabTableSectionChanger
            TabclassName={"TabHeader"}
            MobclassName="MobHeader"
          />
          {
            !BottomChange?
            <MobileTabCardContainer productData={data} />
              :
              <div
            style={{
              minHeight: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "#D2D2D2" }}>No data</h1>
          </div>
          }
        </TableBodyContainer>
        <FaviConButton
          onClick={() => {
            navigate("/AddOrder");
          }}
        />
      </CustomBody>
    </StoreContext.Provider>
  );
}

export default MainDesktop;
