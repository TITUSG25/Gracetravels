import React from "react";
import '../App.css'

import { Button } from "@mui/material";
import { Center } from "@chakra-ui/react";
import indexBackground from "../image/car.png";
import { useNavigate } from "react-router-dom";
import ActionAreaCard from "./Card";
import Footer from "./footer";
import ActionCard from "./card2";



function Booking() {
  const Btn = {
    background: "#efc311",
    color: "black",
    width: "506px",
  };
  const navigate = useNavigate();
  const jump = () => {
    navigate("/Create");
  };

  return (
    <>
      <div className="div1">
        <Center>
          <h1>Grace Travels</h1>
        </Center>
        <p>
          "Life is like a taxi. The meter just keeps a ticking whether you are
          getting somewhere or just standing still."
        </p>
        <Center>
          <Button onClick={jump} style={Btn}>
            Book Now
          </Button>
        </Center>
      </div>
      <div className="div2">
        <img src={indexBackground} width="100%" />
      </div>
      <div className="cards">
        <ActionAreaCard/>
        <ActionCard/>
      </div>
      <Footer/>
    </>
  );
}

export default Booking;
