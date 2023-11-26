import React from "react";
import s from "./Products.module.scss";
import Product from "./Product/Product";

import LaravelImg from "../../images/Products/laravel-course.png"
import BusinessImg from "../../images/Products/business-course.png"
import EnglishImg from "../../images/Products/english-course.png"
import GraphicImg from "../../images/Products/graphic-course.png"
import MathImg from "../../images/Products/math-course.png"



function Products(props) {
  return (
    <div className={s.products__block}>
      <div className={s.products__header__wrapper}>

        <div className={s.products__title__wrapper}>
            {props.title}
        </div>

        <div className={s.lines}>
            <span></span>
        </div>

      </div>

      <div className={s.products__wrapper}>

        <Product title={"Laravel"} price={2.99} productImg={LaravelImg}/>
        <Product title={"English(A1, A2)"} price={5.99} productImg={EnglishImg}/>
        <Product title={"Business "} price={2.99} productImg={BusinessImg}/>
        <Product title={"Graphic Design"} price={7.99} productImg={GraphicImg}/>
        <Product title={"Mathematics"} price={2.99} productImg={MathImg}/>
        <Product title={"Laravel"} price={4.99} productImg={LaravelImg}/>
        <Product title={"English(A1, A2)"} price={5.99} productImg={EnglishImg}/>
        <Product title={"Business "} price={2.99} productImg={BusinessImg}/>
        <Product title={"Graphic Design"} price={2.99} productImg={GraphicImg}/>
        <Product title={"Mathematics"} price={11.99} productImg={MathImg}/>
        <Product title={"Laravel"} price={2.99} productImg={LaravelImg}/>
        <Product title={"English(A1, A2)"} price={5.99} productImg={EnglishImg}/>

      </div>
    </div>
  );
}

export default Products;
