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
//import { userState, carthandler } from "../store/userSlice";
import { cartState, decrease, increase } from "../store/cartSlice";
import { addProductToCart } from "../store/cartSlice";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";

const SingleProduct: React.FC<{ pid: string | string[] | undefined }> = ({
  pid,
}) => {
  const router = useRouter();
  const fetcher = (url: string) => axios(url).then((r) => r.data);
  const { data, error, isLoading } = useSWR(
    `https://shop-api-backend-main.vercel.app/api/products/info/${pid}`,
    fetcher
  );
  const [selectedColor, setSelectedColor] = useState(data?.color?.[0]);
  const [selectedSize ,setSelectedSize]=useState(data?.size?.[0])
  const dispatch = useDispatch();
  const cartInfo = useSelector(cartState);
  const handleAddToCart = () => {
    dispatch(addProductToCart({ item: { ...data ,id: data._id, amount: 1,color:selectedColor||data?.color?.[0] ,size:selectedSize||data?.size?.[0]  } }));
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
          <Box className="imageproduct" sx={{ width: phone ? "70%" : "40%",mx:phone ?"auto":"5px" }}>
            <img src={data.img} alt="products image" />
          </Box>
          <Box>
          <Box className="pinfo row ">
            <h4>{data.title}</h4>
            <h4> ${data.price}</h4>
          </Box>
          <Box className="description">
            <h5>{data.desc}</h5>
          </Box>
          <Box sx={{    marginX:"20px"}}>
            <ColorSelector colors={data?.color} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
            <SizeSelector sizes={data?.size} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
        
          </Box>
          
          </Box>
          <Box
            className="productbottom"
            sx={{ position: "sticky", left:phone? "10px":"70%", bottom:phone? "1vh" :"5vh"}}
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
