import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fechSingleProduct, productslicestate } from "../store/productsSlice";
import { userAction, userstates } from "../store/userSlice";
import { increase,decrease,remove, cartState } from "../store/cartSlice";


const CartItem: React.FC<{ key: number, id: string, image: string, title: string, price: number, amount: number }> = (props) => {
    const dispatch = useDispatch();
    const cartInfo = useSelector(cartState);
    
   // const curentproduct = useSelector(productslicestate);
    const handlePlusCart = () => {
        dispatch(increase({item:{id:props.id,price:props.price}}))
    }
    const handleMinusCart = () => {
        dispatch(decrease({item:{id:props.id,price:props.price}}))
    }

    return (<>
        <div className="cartitem">
            <div className="productimagecart">
                <img src={props.image} alt="product image" />
            </div>
            <div className="productinfo">
                <div className="title"><h5>{props.title}</h5></div>
                <div className="price"><h4>${props.price}</h4></div>
            </div>
            <div className="itemamount row">
                <div className="minusbtn" onClick={handleMinusCart}><IconButton sx={{ p: '3px' }}><RemoveIcon /></IconButton></div>
                <div className="amount"><h4>{props.amount}</h4></div>
                <div className="plusbtn" onClick={handlePlusCart}>  <IconButton sx={{ p: '3px' }}><AddIcon /></IconButton></div></div>

        </div>
    </>)
}
export default CartItem;