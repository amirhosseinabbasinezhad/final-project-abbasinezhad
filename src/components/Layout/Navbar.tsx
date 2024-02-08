import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import Link from "next/link";
import { userstates, carthandler } from "../store/userSlice";
import { productslicestate } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { cartState } from "../store/cartSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(userstates);

  const cartInfo = useSelector(cartState);
  const curentproduct = useSelector(productslicestate);
  const [showNav, setShowNav] = useState(true);
  const [showPayBTN, setShowPayBTN] = useState(false);
  const router = useRouter();

  const phone = useMediaQuery("(max-width: 550px)");
  const tablet = useMediaQuery("(max-width: 770px)");

  const handleAddToCart = () => {
    const cartArray = user.cart;
    carthandler(dispatch, curentproduct.product, user.cart, 1);

    curentproduct.product;
  };
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

  const HandlePayNow = () => {
    if (user.authState === true) {
      if (user.cart.items.length > 0) {
        //edame dare ...
      }
    }
  };
  const showProductHandler = () => {
    return (
      <>
        <div className="productbottom">
          <Button
            onClick={handleAddToCart}
            color="secondary"
            className="Buybtnproduct"
            variant="contained"
          >
            Buy Now
          </Button>
          <div className="btnpcart">
            <IconButton
              onClick={(e) => {
                router.push("/cart");
              }}
              sx={{ p: "15px" }}
            >
              <ShoppingCartOutlinedIcon color="secondary" />
            </IconButton>
          </div>
        </div>
      </>
    );
  };
  const navColorHandler = () => {
    const url = router.pathname;
    return (
      <>
        <Box
          className="navbar"
          sx={{
            position: "fixed",
            bottom: "20px",
            display: phone ?"flex" : 'none',

            justifyContent: "space-between",
            width: "100%",
          }}
          style={{ marginTop: `${showPayBTN ? "5px" : "auto"}` }}
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

  const BottomCart = () => {
    return (
      <>
        <div className="Cartbottom">
          <div className="total">
            <h3>${cartInfo?.totalAmount}</h3>
          </div>
          <div className="paynowbtn">
            <Button
              onClick={HandlePayNow}
              color="secondary"
              className="paybtn"
              variant="contained"
            >
              Pay Now
            </Button>
          </div>
        </div>
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
