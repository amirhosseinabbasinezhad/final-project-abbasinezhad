
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "../../../components/home/Products";


const Shoes = () => {

   
    return <>
        <div className="Shoes" style={{ padding: "20px 20px 5px 20px" }}>
        <Products limit="5" categoryType="shoes"/>
        </div>
    </>

}
export default Shoes;