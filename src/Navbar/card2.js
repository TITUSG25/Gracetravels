import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import santro from "../image/santro.png";
import DB from "../image/Db9.png";
import minicooper from "../image/minicooper.png";

import "./card.css";

export default function ActionCard() {
  return (
    <>
      <div className="divs">
        <div className="Fs">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={santro}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Santro
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  First <b>3km/100Rs</b>
                  <br />
                  Additional kilometers <b>6Rs</b>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="Fs">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={DB}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  DB9
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   <b></b>
                  <br />
                  <h3>Luxury Car</h3>
                  <b>For Wedding and Reception Only</b>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="Fs">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={minicooper}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  minicooper
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   <h3>Luxury Car</h3>
                  <br />
                  <b>For Wedding and Reception Only

                  </b>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      
      
    </>
  );
}
