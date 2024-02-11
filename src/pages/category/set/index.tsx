
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "../../../components/home/Products";



const Others = () => {

    return <>
        <div className="Others" style={{ padding: "20px 20px 5px 20px" }}>
        <Products limit="5" categoryType="set"/>
        </div>
    </>

}
export default Others;