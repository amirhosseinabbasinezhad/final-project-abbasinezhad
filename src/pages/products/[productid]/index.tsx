
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SingleProduct from "../../../components/singleProduct/SingleProduct";

const Products: NextPage = () => {
    const router = useRouter();
    const { productid } = router.query;

    
    return (<>
            <SingleProduct pid={productid} />
    </>)
}
export default Products;