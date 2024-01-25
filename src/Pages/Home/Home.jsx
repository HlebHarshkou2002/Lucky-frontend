import React from "react";
import Intro from "../../Components/Intro/Intro";
import Products from "../../Components/Products/Products";
import Discount from "../../Components/Discount/Discount";
import { fetchMostPopularProducts} from "../../redux/slices/products";

function Home (props) {
    return (
        <>
            <Intro />
            <Products title={"Most popular"} fetchProductsFunction={fetchMostPopularProducts} searchValue={props.searchValue}/> 
            <Discount />
        </>
    )
}

export default Home;