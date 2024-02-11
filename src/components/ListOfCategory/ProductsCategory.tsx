

import React, { useEffect } from "react";
import Router from "next/router";
import Link from "next/link";


const ProductCategory = () => {

    return <>
        <div className="categorytitle">
            <h4> Category :</h4>
        </div>
        <div className="categoriespage">
            <Link href={"/category/shoes"}>
                <div className="shoes">
                    <h4>shoes</h4>
                    <img src="https://api.lorem.space/image/shoes?w=640&h=480&r=7520" alt="shoes" />
                </div>
            </Link>
            <Link href={"/category/men"}>
                <div className="clothes">
                    <h4>men</h4>
                    <img src="https://api.lorem.space/image/fashion?w=640&h=480&r=1827" alt="men" />
                </div>
            </Link>
            <Link href={"/category/women"}>
                <div className="electronics">
                    <h4>women</h4>
                    <img src="https://api.lorem.space/image/watch?w=640&h=480&r=8823" alt="women" />
                </div>
            </Link>
            <Link href={"/category/set"}>
                <div className="set">
                    <h4>set</h4>
                    <img src="https://api.lorem.space/image/furniture?w=640&h=480&r=5955" alt="set" />
                </div>
            </Link>
            <Link href={"/category/kids"}>
                <div className="kids">
                    <h4>kids</h4>
                    <img src="https://api.lorem.space/image?w=640&h=480&r=879" alt="kids" />
                </div>
            </Link>

        </div>
    </>

}
export default ProductCategory;