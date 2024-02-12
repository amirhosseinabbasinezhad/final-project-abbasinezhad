import Product from "./Product";
import { useSelector } from "react-redux";
//import { productAction, productslicestate } from "../store/productsSlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";
import axios from "axios";
import { Box, useMediaQuery } from "@mui/material";
const Products = ({limit,categoryType}:{limit:string,categoryType:string}) => {
  const phone = useMediaQuery("(max-width: 550px)");
  const tablet = useMediaQuery("(max-width: 770px)");
  //fetch products
  const fetcher = (url: string) => axios(url).then((r) => r.data);

  //redux
  //const productsstates = useSelector(productslicestate);
  //const dispatch = useDispatch()
  //state
  const [page, setpage] = useState<number>(1);
  const { data, error, isLoading } = useSWR(
    `https://shop-api-backend-main.vercel.app/api/products/allInfo?limit=${limit}${categoryType!=="0" ? `&category=${categoryType}`: ""}&page=${page}`,
    fetcher
  );
  //useeffects
  // useEffect(() => {
  //   dispatch(productAction.setPage(page));
  // }, [page]);
  //useEffect(() => {
  //  fechData(dispatch, productsstates.categoryapi, productsstates.page - 1, productsstates.Limit);
  //setpage(productsstates.page)
  //}, [productsstates.page, productsstates.categoryapi, productsstates.Limit])
  //functions
  const handelPrevPage = (Event: React.FormEvent) => {
    Event.preventDefault();
    if (page > 1) {
      setpage(page - 1);
    }
  };
  const handelNextPage = (Event: React.FormEvent) => {
    Event.preventDefault();
    setpage(page + 1);
  };
  const productShow = data?.map(
    (product: {
      _id: string;
      title: string;
      price: number;
      desc: string;
      categories: string[];
      img: string;
      //rating: {
      //    rate: number,
      //    count: number,
      //},
    }) => {
      return (
        <Product
          _id={product._id}
          key={product.price}
          title={product.title}
          price={product.price}
          image={product.img}
        />
      );
    }
  );
  return (
    <>
      <Box sx={{marginTop:"10px"}}>
        <Box
          className="products"
          sx={{
            display: "grid",
            gridTemplateColumns: phone
              ? "repeat(2, 45%)"
              : tablet
              ? "repeat(3, 28%)"
              : "repeat(4, 22%)",
            gridGap: phone ? "10%" : tablet ? "5%" : "3%",
            width: "100%",
            mb:phone ? "250px" :"50px"
          }}
        >
          {productShow}
        </Box>
        <Box
          className="row bottompaging"
          sx={{ mb: phone ? "80px" : "0", mt: "80px" }}
        >
          <IconButton
            disableRipple={page <= 1}
            onClick={(e) => {
              handelPrevPage(e);
            }}
            sx={{ p: "10px" }}
          >
            <ArrowBackIosNewIcon color={page <= 1 ? "disabled" : "secondary"} />
          </IconButton>
          <h5>{page}</h5>
          <IconButton
            onClick={(e) => {
              handelNextPage(e);
            }}
            sx={{ p: "10px" }}
          >
            <ArrowForwardIosIcon color="secondary" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
export default Products;
