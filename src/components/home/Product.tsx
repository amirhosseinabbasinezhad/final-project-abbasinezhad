import Link from "next/link";

import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";

import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { Box, Card } from "@mui/material";

const Product: React.FC<{
  _id: string;
  key: number;
  title: string;
  price: number;
  image: string;
}> = (props) => {
  const router = useRouter();
  const singleProductHandler = (e: React.MouseEvent) => {
    console.log(props);

    router.push(`/products/${props._id}`);
  };

  return (
    <>
      <Box
        onClick={(e) => {
          singleProductHandler(e);
        }}
        className="product"
      >
        <Card className="maininfo row">
          <Box className="imagebox" sx={{ width: "100%" }}>
            <img src={props.image} alt="product image" />
          </Box>
          <Box className="textproduct">
            <h5>{props?.title?.slice(0, 30)}</h5>
            <h6>${props.price}</h6>
          </Box>
          <Box className="likeicon">
            <FavoriteBorderTwoToneIcon sx={{ fontSize: "17px" }} />
          </Box>
        </Card>
      </Box>
    </>
  );
};
export default React.memo(Product);
