import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PendingOrder from "../Shipment/PendingOrder";
import { Button, useTheme } from "@mui/material";
import { Add } from "@mui/icons-material";

const OrderCarousel = ({ shipments, openModal }) => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: false,
    accessibility: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true,
  };

  return (
    <Slider {...settings}>
      <Button
        key={"e27c-s4ms1-3mdf-5jgn"}
        onClick={() => openModal()}
        sx={{
          minWidth: 233,
          minHeight: 157,
          background: theme.palette.primary.main,
          color: "white",
          borderRadius: 2,
          boxShadow: 3,
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: "black",
          },
        }}
      >
        <Add />
        NEW ORDER
      </Button>
      {shipments.map((shipment) => {
        return <PendingOrder key={shipment.id} shipment={shipment} />;
      })}
    </Slider>
  );
};

export default OrderCarousel;
