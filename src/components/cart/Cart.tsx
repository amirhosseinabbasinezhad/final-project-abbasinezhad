import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userstates } from "../store/userSlice";
import Header from "../home/Header";
import CartItem from "./CartItem";
import { cartState } from "../store/cartSlice";

const Cart: React.FC = () => {

    const cartInfo = useSelector(cartState);

    const itemsincart = cartInfo?.items.map((item, index) => {

        return <CartItem key={index} id={item?.id} image={item?.img} title={item?.title} price={item?.price}
            amount={item.amount} />
    })
    return (<>
        <div className="showcartpage" style={{ padding: "20px 20px 5px 20px" }}>

            <Header text="cart" />
            <div className="cartitems">
                {itemsincart}
            </div>
            
        </div>



    </>)
}
export default Cart;