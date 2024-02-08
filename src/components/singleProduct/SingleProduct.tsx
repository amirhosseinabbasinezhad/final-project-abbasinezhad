import React, { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { Badge, Box, CircularProgress, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, IconButton } from "@mui/material";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
//import { userstates, carthandler } from "../store/userSlice";
import { cartState, decrease, increase } from "../store/cartSlice";
import { addProductToCart } from "../store/cartSlice";

const SingleProduct: React.FC<{ pid: string | string[] | undefined }> = ({
  pid,
}) => {
  const router = useRouter();
  const fetcher = (url: string) => axios(url).then((r) => r.data);
  const { data, error, isLoading } = useSWR(
    `https://shop-api-backend-main.vercel.app/api/products/info/${pid}`,
    fetcher
  );
  const dispatch = useDispatch();
  const cartInfo = useSelector(cartState);
  const handleAddToCart = () => {
    dispatch(addProductToCart({ item: { id: data._id, amount: 1, ...data } }));
  };

  const handlePlusCart = () => {
    dispatch(increase({ item: { id: data?._id, price: data?.price } }));
  };
  const handleMinusCart = () => {
    dispatch(decrease({ item: { id: data?._id, price: data?.price } }));
  };
  const findItemInCart = cartInfo?.items?.findIndex(
    (item) => item?.id === data?._id
  );
  const phone = useMediaQuery("(max-width: 550px)");
  const tablet = useMediaQuery("(max-width: 770px)");
  return (
    <>
      {isLoading ? (
        <CircularProgress sx={{ margin: "auto" }} color="secondary" />
      ) : (
        <Box className="singleproduct" sx={{padding:phone ? "0" :"25px" ,display:"flex" ,flexDirection:phone ? "column" : "row"}}>
          <Box className="imageproduct" sx={{ width: phone ? "100%" : "40%" }}>
            <img src={data.img} alt="products image" />
          </Box>
          <Box className="pinfo row ">
            <h4>{data.title}</h4>
            <h4>${data.price}</h4>
          </Box>
          <Box className="description">
            <h5>{data.desc}</h5>
          </Box>
          <Box
            className="productbottom"
            sx={{ position: "sticky", left:phone? "10px":"70%", bottom:phone? "20vh" :"25vh"}}
          >
            {findItemInCart !== -1 ? (
              <Box
                className="itemamount2 row"
              >
                <Box className="minusbtn" onClick={handleMinusCart}>
                  <IconButton sx={{ p: "3px" }}>
                    <RemoveIcon />
                  </IconButton>
                </Box>
                <Box className="amount">
                  <h5>{cartInfo?.items?.[findItemInCart]?.amount}</h5>
                </Box>
                <Box className="plusbtn" onClick={handlePlusCart}>
                  {" "}
                  <IconButton sx={{ p: "3px" }}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <Button
                onClick={handleAddToCart}
                color="secondary"
                className="Buybtnproduct"
                variant="contained"
              >
                Buy Now
              </Button>
            )}
            <Box className="btnpcart">
              <IconButton
                onClick={(e) => {
                  router.push("/cart");
                }}
                sx={{ p: "15px" }}
              >
                <Badge badgeContent={cartInfo?.totalCount} color="secondary">
                  <ShoppingCartOutlinedIcon
                    color="secondary"
                    sx={{ m: "2px" }}
                  />
                </Badge>
              </IconButton>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
export default SingleProduct;
