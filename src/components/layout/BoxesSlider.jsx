import React from "react";
import Slider from "react-slick";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = ({ shipments }) => {
  const settings = {
    dots: true,
    infinite: true,
    accessibility: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      {shipments.map((shipment) => {
        return (
          <Box key={shipment.id} sx={{ borderRadius: 4, background: "red" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {shipment.title}
                </Typography>
                <Typography variant="body2">{shipment.description}</Typography>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Slider>
  );
};

export default SimpleSlider;
