import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../home/Header";
import CartItem from "./CartItem";
import AddressForm from "./AddressForm"; // Import the AddressForm component
import { cartState } from "../store/cartSlice";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";

const Cart: React.FC = () => {
  const phone = useMediaQuery("(max-width: 550px)");
  const tablet = useMediaQuery("(max-width: 770px)");
  const cartInfo = useSelector(cartState);

  const itemsincart = cartInfo?.items.map((item, index) => {
    return (
      <CartItem
        key={index}
        id={item?.id}
        image={item?.img}
        size={item?.size}
        color={item?.color}
        title={item?.title}
        price={item?.price}
        amount={item.amount}
      />
    );
  });

  return (
    <>
      <Box
        className="showcartpage col-12"
        style={{ padding: "20px 20px 5px 20px" ,marginBottom:"95px"}}
      >
        <Header text="cart" />
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: phone ? "column" : "row",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item xs={12} md={12} lg={6} className="cartitems ">
            {itemsincart}
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            className="Address"
            sx={{ display: phone ? "none" : "block" }}
          >
            <AddressForm />
          </Grid>
        </Grid>
       
      </Box>
    </>
  );
};

export default Cart;
