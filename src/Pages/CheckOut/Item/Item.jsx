import React from "react";
import s from "./Item.module.scss"

function Item({id, title, price, productImgUrl}) {
    return (
        <div className={s.item__wrapper}>
            <div className={s.img__wrapper}>
                <img src={productImgUrl} alt="" />
            </div>
            <div className={s.title__wrapper}>
                {title}
            </div>
            <div className={s.price__wrapper}>
                {price} BYN
            </div>

        </div>
    )
}

export default Item;