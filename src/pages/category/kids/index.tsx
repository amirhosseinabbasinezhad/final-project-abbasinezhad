
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "../../../components/home/Products";


const Electronics = () => {


 
  return <>
    <div className="electronics" style={{ padding: "20px 20px 5px 20px" }}>
    <Products limit="5" categoryType="kids"/>
    </div>
  </>

}
export default Electronics;