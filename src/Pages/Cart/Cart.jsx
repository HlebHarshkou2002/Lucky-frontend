import React from "react";
import s from "./Cart.module.scss";
import Item from "./Item/Item";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../redux/axios";
import { Navigate, useNavigate } from "react-router-dom";

import { clearItems } from "../../redux/slices/cartSlice";

function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.auth.data._id)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateSale = () => {
    try {
      const { data } = axios.post("/orders", {
        userId: userId,
        products: items
      });
      dispatch(clearItems());
      alert("Заказ принят!");
      navigate("/");
      console.log(data);
    } catch (err) {
      alert("Ошибка при оплате товара");
    }
  };

  return (
    <div className={s.cart__wrapper}>
      {items.map((obj) => (
        <Item
          id={obj.id}
          title={obj.title}
          price={obj.price}
          productImgUrl={obj.imgUrl}
        />
      ))}
      <div className={s.total__price__wrapper}>
        Сумма заказа: {totalPrice.toFixed(2)} BYN
      </div>
      <div className={s.cart__button__wrapper}>
        <button className={s.cart__button} onClick={onCreateSale}>
          Заказать
        </button>
      </div>
    </div>
  );
}

export default Cart;
