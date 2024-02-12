
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AddressForm from "../../components/Address/AddressForm";
import Header from "../../components/home/Header";
import { Box } from "@mui/material";


const Electronics = () => {


 
  return <>
    <div className="electronics" style={{ padding: "20px 20px 5px 20px" }}>
  <Header text="name"/>
  <Box sx={{padding:"25px"}}>
  <AddressForm />
  </Box>
    </div>
  </>

}
export default Electronics;