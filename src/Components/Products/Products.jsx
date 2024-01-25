import React from "react";
import s from "./Products.module.scss";
import Product from "./Product/Product";
import { useDispatch, useSelector } from "react-redux";

import LaravelImg from "../../images/Products/laravel-course.png";
import BusinessImg from "../../images/Products/business-course.png";
import EnglishImg from "../../images/Products/english-course.png";
import GraphicImg from "../../images/Products/graphic-course.png";
import MathImg from "../../images/Products/math-course.png";

import axios from "../../redux/axios";


function Products(props) {
  const dispatch = useDispatch();
  const { products, genres } = useSelector((state) => state.products);

  const isProductsLoading = products.status === "loading";

  React.useEffect(() => {
    dispatch(props.fetchProductsFunction());
  }, []);

  return (
    <div className={s.products__block}>
      <div className={s.products__header__wrapper}>
        <div className={s.products__title__wrapper}>{props.title}</div>

        <div className={s.lines}>
          <span></span>
        </div>
      </div>

      <div className={s.products__wrapper}>
        {isProductsLoading ? (
          "Loading"
        ) : (
          products.items.data?.filter(obj => {
            if(obj.title.toLowerCase().includes(props.searchValue.toLowerCase())) {
              return true
            } else {
              return false
            }
          }).map((product) => (
            <Product
              id={product._id}
              title={product.title}
              price={product.price}
              productImgUrl={product.imgUrl}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
