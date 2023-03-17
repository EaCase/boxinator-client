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

  return (
    <div>
      <Slider {...settings}>
        {shipments.map((shipment) => {
          return (
            <Box sx={{ mx: 2 }}>
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
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};


export default SimpleSlider;
