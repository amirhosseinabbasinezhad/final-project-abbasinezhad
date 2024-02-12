
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "../../../components/home/Products";
import Header from "../../../components/home/Header";



const Others = () => {

    return <>
        <div className="Others" style={{ padding: "20px 20px 5px 20px" }}>
        <Header text="name"/>
        <Products limit="5" categoryType="set"/>
        </div>
    </>

}
export default Others;