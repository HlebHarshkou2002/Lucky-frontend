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
  const fullName = useSelector((state) => state.auth.data.fullName)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wsConnection = new WebSocket('ws://localhost:8080')

  const onCreateSale = () => {
    try {
      const data = axios.post("/orders", {
        userId: userId,
        products: items
      }).then((res) => {
        console.log("ДАННЫЕ ПРИ СОЗДАНИИ ЗАКАЗА: ", res.data)
        const data = res.data;
        //socket data
        const sendMessage = {
          message: "123",
          userId: userId,
          _id: data._id,
          orderStatus: data.orderStatus,
          user: {
            fullName: fullName
          },
          createdAt: data.createdAt,
          products: items,
          event: "message"
        }
        wsConnection.send(JSON.stringify(sendMessage))

        dispatch(clearItems());
        alert("Заказ принят!");
        navigate("/");
      });


    } catch (err) {
      alert("Ошибка при оплате товара");
    }
  };

  //WebSocket

  React.useEffect(() => {


    wsConnection.onopen = () => {
      console.log("Socket подключился")
      const message = {
        event: "connection"
      }
      wsConnection.send(JSON.stringify(message))
    }
    wsConnection.onmessage = () => {

    }
    wsConnection.onclose = () => {
      console.log("Socket закрыт")
    }
    wsConnection.onerror = () => {
      console.log("Socket ошибка")
    }


  }, [])

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
