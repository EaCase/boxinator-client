import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, Typography } from "@mui/material";

const BoxesSlider = ({ boxes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ overflowX: "scroll" }}>
      <Slider {...settings}>
        {boxes.map((box, index) => (
          <div key={index}>
            <p>{box.title}</p>
            <p>{box.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BoxesSlider;

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
      <h2> Single Item</h2>
      <Slider {...settings}>
        {shipments.map((shipment) => {
          return (
            <>
              <Box sx={{ minWidth: 15 }} />
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
