import React from "react";
import s from "./SearchProducts.module.scss";
import Products from "../../Components/Products/Products";
import SideBar from "../../Components/SideBar/SideBar";

function SearchProducts(props) {
    return(
        <div className={s.search__block}>
            <SideBar />
            <Products title={"Courses"} searchValue={props.searchValue}/>
        </div>
    )
}

export default SearchProducts;