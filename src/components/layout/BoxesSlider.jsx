import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const SimpleSlider = ({ shipments }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  console.log(shipments);

  return (
    <div>
      <h3> Ordered </h3>
      <Slider {...settings}>
        {shipments.map((shipment) => {
          return (
            <>
              <Box sx={{ minWidth: 15, justifyContent: "space-between" }} />
              <Card sx={{ minWidth: 275, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {shipment.title}
                  </Typography>
                  <Typography variant="body2">
                    {shipment.description}
                  </Typography>
                </CardContent>
              </Card>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
