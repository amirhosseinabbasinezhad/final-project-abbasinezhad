
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "../../../components/home/Products";
import Header from "../../../components/home/Header";


const Shoes = () => {

   
    return <>
        <div className="Shoes" style={{ padding: "20px 20px 5px 20px" }}>
        <Header text="name"/>
        <Products limit="5" categoryType="shoes"/>
        </div>
    </>

}
export default Shoes;