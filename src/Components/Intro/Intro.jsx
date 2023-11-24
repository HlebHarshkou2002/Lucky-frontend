import React from "react";
import s from "./Intro.module.scss"
import Categories from "./Categories/Categories";
import Navigation from "./Navigation/Navigation";

function Intro() {
    return(
        <div className={s.intro__wrapper}>
            <Categories />
            <Navigation />
        </div>
    )
}

export default Intro;