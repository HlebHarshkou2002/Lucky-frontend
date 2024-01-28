import React from "react";
import s from "./NewProduct.module.scss";
import NewImg from "../../../images/NewProducts/NEW.png";
import BasketIcon from "../../../images/Products/basket-icon.png";
import EyeIcon from "../../../images/Products/eye-icon.png";
import HeartIcon from "../../../images/Products/heart-icon.png";
import { Link } from "react-router-dom";

function NewProduct(props) {
  return (
    <div className={s.product__block}>
      <div className={s.product__img__block}>
        <div className={s.new__wrapper}>
          <img src={NewImg} alt="NEW!" />
        </div>

        <div className={s.product__options}>
          <div className={s.product__option}>
            <img src={BasketIcon} alt="" />
          </div>
          <div className={s.product__option}>
            <img src={HeartIcon} alt="" />
          </div>
          <Link to={`/products/${props.id}`}>
            <div className={s.product__option}>
              <img src={EyeIcon} alt="" />
            </div>
          </Link>
        </div>

        <div className={s.product__img__wrapper}>
          <img src={props.productImgUrl} alt="" />
        </div>
      </div>

      <div className={s.product__title}>{props.title}</div>
      <div className={s.product__price}>{props.price}$</div>
    </div>
  );
}

export default NewProduct;
