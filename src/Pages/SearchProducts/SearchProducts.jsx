import React from "react";
import s from "./SearchProducts.module.scss";
import Products from "../../Components/Products/Products";
import SideBar from "../../Components/SideBar/SideBar";

function SearchProducts() {
    return(
        <div className={s.search__block}>
            <SideBar />
            <Products title={"Courses"}/>
        </div>
    )
}

export default SearchProducts;