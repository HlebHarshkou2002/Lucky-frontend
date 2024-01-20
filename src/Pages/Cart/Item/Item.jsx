import React from "react";
import s from "./Item.module.scss"
import { useDispatch } from "react-redux";
import { removeItem } from "../../../redux/slices/cartSlice";

function Item({id, title, price, productImgUrl}) {
    const dispatch = useDispatch();

    const remove = () => {
        const item = {
            id,
            title,
            price,
            productImgUrl
          };
        dispatch(removeItem(item))
    }

    return(
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
            <div className={s.remove__wrapper} onClick={remove}>
                X
            </div>
            
        </div>
    )
}

export default Item