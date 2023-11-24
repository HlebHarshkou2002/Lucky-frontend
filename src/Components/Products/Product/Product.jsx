import React from "react";
import s from "./Product.module.scss";


//icons
import BasketIcon from "../../../images/Products/basket-icon.png";
import EyeIcon from "../../../images/Products/eye-icon.png";
import HeartIcon from "../../../images/Products/heart-icon.png";

function Product(props) {
    return(
        <div className={s.product__wrapper}>
            <div className={s.product__image__wrapper}>
                <img src={props.productImg} alt="" />
            </div>
            <div className={s.product__content__wrapper}>
                <div className={s.product__title}>
                    <span>{props.title}</span>
                </div>
                <div className={s.product__price}>
                    <span>{props.price}$</span>
                </div>

                <div className={s.product__options}>
                    <div className={s.product__option}>
                        <img src={BasketIcon} alt="" />
                    </div>
                    <div className={s.product__option}>
                        <img src={HeartIcon} alt="" />
                    </div>
                    <div className={s.product__option}>
                        <img src={EyeIcon} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product;