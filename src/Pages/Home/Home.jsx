import React from "react";
import Intro from "../../Components/Intro/Intro";
import Products from "../../Components/Products/Products";

function Home () {
    return (
        <>
            <Intro />
            <Products title={"Most popular"}/> 
        </>
    )
}

export default Home;