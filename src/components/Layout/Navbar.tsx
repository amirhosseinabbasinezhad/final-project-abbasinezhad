import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import Link from "next/link";
import { userState } from "../store/userSlice";
//import { productslicestate } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { cartState, clearCart } from "../store/cartSlice";
import { toast } from "react-toastify";
import { sendOrder } from "../../pages/api/order";
import { useAppDispatch } from "../store";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const cart = useSelector(cartState);

  const cartInfo = useSelector(cartState);
  // const curentproduct = useSelector(productslicestate);
  const [showNav, setShowNav] = useState(true);
  const [showPayBTN, setShowPayBTN] = useState(false);
  const router = useRouter();

  const phone = useMediaQuery("(max-width: 550px)");
  const tablet = useMediaQuery("(max-width: 770px)");

  useEffect(() => {
    if (router.pathname.includes("products/")) {
      setShowPayBTN(false);
      setShowNav(false);
    } else if (router.pathname.includes("cart")) {
      setShowPayBTN(true);
      setShowNav(true);
    } else {
      setShowPayBTN(false);
      setShowNav(true);
    }
  }, [router.pathname]);

  const HandlePayNow = async () => {
    if (cart?.totalCount > 0) {
      if (cart?.address?.street) {
        const orderData = {
          userID: localStorage?.getItem("userId"),
          type: "cart",
          products: cart?.items?.map((item) => {
            return {
              title: item?.title,
              img: item?.img,
              price: item?.price,
              productID: item?.id,
              quantity: item?.amount,
              size: item?.size,
              color: item?.color,
            };
          }),
          price: cart?.totalAmount,
          userInfo: {
            address: cart?.address,
            name: localStorage?.getItem("name"),
            email: localStorage?.getItem("email"),
          },
          order: {},
          paymentStatus: true,
        };
        if (
          orderData.userID &&
          orderData.userInfo.name &&
          orderData.userInfo.email
        ) {
          try {
            const response = await sendOrder(orderData);
            const data = await response;
            toast.success(`ordered successfully ...}`);
            dispatch(clearCart())
            //console.log(data); 
          } catch (error) {
            toast.error(`error:${error}`)
            //console.error("Error:", error); // Handle any errors that occurred during the fetch
          }
      } else {
        toast.error("address doesnot exist !");
       
        }
      }
    }
    else{
      
      toast.error("cart is empty");
    }
  };

  const navColorHandler = () => {
    const url = router.pathname;
    return (
      <>
        <Box
          className="navbar"
          sx={{
            position: "fixed",
            bottom: "15px",
            display: phone ? "flex" : "none",
            
            
            justifyContent: "space-around",
            width: "100%",
          }}
          style={{  marginTop: `${showPayBTN ? "5px" : "auto"}` }}
        >
          <Link href={"/home"}>
            <HomeIcon
              color={url.includes("/home") ? "secondary" : "disabled"}
            />
          </Link>
          <Link href={"/category"}>
            <SubjectOutlinedIcon
              color={url.includes("/category") ? "secondary" : "disabled"}
            />
          </Link>
          <Link href={"/cart"}>
            <ShoppingCartOutlinedIcon
              color={url.includes("/cart") ? "secondary" : "disabled"}
            />
          </Link>
          <Link href={`/user/${11}`}>
            <PersonOutlineSharpIcon
              color={url.includes("/user") ? "secondary" : "disabled"}
            />
          </Link>
        </Box>
      </>
    );
  };

  const BottomCart: any = () => {
    return (
      <>
        <Box
          className="Cartbottom"
          sx={{
            width: phone ? "100%" : "30%",
            borderRadius: phone ? "0" : tablet ? "8px" : "8px",

            borderBottom: phone ? "1px solid #cdcccc" : "none",
            marginTop: "auto",
          }}
        >
          <Box className="total">
            <h3>${cartInfo?.totalAmount}</h3>
          </Box>
          <Box className="paynowbtn " sx={{ width: "45%" }}>
            <Button
              onClick={HandlePayNow}
              color="secondary"
              className="paybtn"
              sx={{ maxHeight: phone ? "55px" : "iherit" }}
              variant="contained"
            >
              confirm 
            </Button>
          </Box>
        </Box>
      </>
    );
  };
  return (
    <>
      {showPayBTN && BottomCart()}
      {showNav && navColorHandler()}
    </>
  );
};
export default Navbar;
