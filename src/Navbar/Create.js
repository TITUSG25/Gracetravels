import React, { useState } from "react";
import { API_URL } from "../Constants/URL";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "../image/caru.png";
import Footer from "./footer";


function Create() {
  const [FirstName, setFirstName] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [address,setAddress] =useState("");
  const navigate = useNavigate();

  const postData = async () => {
    console.log(FirstName, mobileNumber,address);
    await axios.post(API_URL, {
      FirstName,
      mobileNumber,
      address
       });
    alert("Your Request Submitted");
    navigate("/booking")
    
  };

  return (
    <>
    <div className="white">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <div className="bg">
            <img src={background} width="100%" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="background">
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Mobie-Number"
              variant="standard"
              value={mobileNumber}
              onChange={(e) => setmobileNumber(e.target.value)}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <Button onClick={postData}>Book Now</Button>
          </div>
        </Grid>
      </Grid>
      <Footer/>
      </div>
    </>
  );
}

export default Create;
