import React from "react";
import s from "./Cart.module.scss";
import Item from "./Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const isCartEmpty = (items.length === 0) ? true : false;

  return (
    <div className={s.cart__wrapper}>
      <div className={s.cart__items}>

        {items.map((obj) => (
          <Item
            id={obj.id}
            title={obj.title}
            price={obj.price}
            productImgUrl={obj.imgUrl}
          />
        ))}
      </div>

      <div className={s.cart__footer} >
        <div className={s.total__price__wrapper}>
          Сумма заказа: {totalPrice.toFixed(2)} BYN
        </div>
        <div className={s.cart__button__wrapper}>
          {/* {isCartEmpty ?
            <button className={s.cart__button__disabled} disabled>
              Заказать
            </button>
            :
            <button className={s.cart__button} onClick={onCreateSale}>
              Заказать
            </button>
          } */}
          <Link to={"/check-out"}>
            <button className={s.cart__button} >
              Заказать
            </button>
          </Link>


        </div>
      </div>
    </div>
  );
}

export default Cart;
