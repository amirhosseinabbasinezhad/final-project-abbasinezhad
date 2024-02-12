import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { AddLocationAlt } from "@mui/icons-material";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const router = useRouter();
  const url = router.pathname;

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (url: any) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
       

        <ListItem disablePadding>
          <Link href={"/home"}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon
                  color={url.includes("/home") ? "secondary" : "disabled"}
                />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding>
          <Link href={"/category"}>
            <ListItemButton>
              <ListItemIcon>
              <SubjectOutlinedIcon
                      color={
                        url.includes("/category") ? "secondary" : "disabled"
                      }
                    />
              </ListItemIcon>
              <ListItemText primary="Category" />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding>
          <Link href={"/cart"}>
            <ListItemButton>
              <ListItemIcon>
              <ShoppingCartOutlinedIcon
                      color={url.includes("/cart") ? "secondary" : "disabled"}
                    />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href={"/user/me"}>
            <ListItemButton>
              <ListItemIcon>
              <PersonOutlineSharpIcon
                      color={url.includes("/user") ? "secondary" : "disabled"}
                    />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href={"/Address"}>
            <ListItemButton>
              <ListItemIcon>
              <AddLocationAlt
                      color={url.includes("/Address") ? "secondary" : "disabled"}
                    />
              </ListItemIcon>
              <ListItemText primary="Address" />
            </ListItemButton>
          </Link>
        </ListItem>
        
      </List>
    </Box>
  );

  return (
    <div>
      {" "}
      <div className="menubtn">
        <IconButton
          sx={{ p: "10px" }}
          onClick={toggleDrawer("left", true)}
          aria-label="menu"
        >
          <WidgetsRoundedIcon color="secondary" />
        </IconButton>
      </div>
      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list(url)}
      </SwipeableDrawer>
    </div>
  );
}
