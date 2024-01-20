import React from "react";
import Intro from "../../Components/Intro/Intro";
import Products from "../../Components/Products/Products";

function Home (props) {
    return (
        <>
            <Intro />
            <Products title={"Most popular"} searchValue={props.searchValue}/> 
        </>
    )
}

export default Home;