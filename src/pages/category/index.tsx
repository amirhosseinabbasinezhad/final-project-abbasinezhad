import React, { useEffect } from "react";
import Router from "next/router";
import ProductCategory from "../../components/ListOfCategory/ProductsCategory";
import { Box } from "@mui/material";
import Header from "../../components/home/Header";


const Category = () => {

    return <>
    <Box sx={{padding:"8px"}}><Header text="name"/></Box>
        <ProductCategory />
    </>

}
export default Category;