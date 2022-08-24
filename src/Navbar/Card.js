import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Indica from "../image/Indica.png";
import SwiftCar from "../image/SwiftCar.png";
import Innova from "../image/Innova.png";

import "./card.css";

export default function ActionAreaCard() {
  return (
    <>
      <div className="divs">
        <div className="Fs">
          <Card sx={{ maxWidth: 345} }>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Indica}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Indica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  First <b>3km/100Rs</b>
                  <br />
                  Additional kilometers <b>8Rs</b>
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
                image={SwiftCar}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Swift
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  First <b>3km/100Rs</b>
                  <br />
                  Additional kilometers <b>10Rs</b>
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
                image={Innova}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Innova
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  First <b>3km/100Rs</b>
                  <br />
                  Additional kilometers <b>12Rs</b>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      
      
    </>
  );
}
