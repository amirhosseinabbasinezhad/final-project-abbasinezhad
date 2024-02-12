import React from "react";
import { userState } from "../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { logoutUser } from "../store/userSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAppDispatch } from "../store";
import OrdersComponent from "./OrdersShow";
import { Grid } from "@mui/material";
import Header from "../home/Header";
const LogedIn: React.FC = () => {
  const user = useSelector(userState);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const LogoutHandler = (event: React.FormEvent) => {
    dispatch(logoutUser());
    router.push(`/user/login`);
  };
  return (
    <>
      <div style={{ padding: "20px 20px 5px 20px" }}>
      <Header text="name"/>
        <Button
          onClick={(e) => {
            LogoutHandler(e);
          }}
          color="secondary"
          className="logoutbtn"
          variant="contained"
        >
          <LogoutRoundedIcon className="logoutbtn" />
        </Button>
        
        <div className="cartinaccunt">
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={6}>
              <Link href="/cart">
                <h3>cart</h3>
              </Link>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <OrdersComponent />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default LogedIn;
