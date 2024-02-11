
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "../../../components/home/Products";

const Furniture = () => {


   
    return <>
        <div className="furniture" style={{ padding: "20px 20px 5px 20px" }}>
        <Products limit="5" categoryType="women"/>
        </div>
    </>

}
export default Furniture;