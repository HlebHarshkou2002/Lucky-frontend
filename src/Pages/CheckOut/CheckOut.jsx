import React, { useEffect, useRef, useState } from "react";
import s from './CheckOut.module.scss'
import { useDispatch, useSelector } from "react-redux";
import axios from "../../redux/axios";
import { Navigate, useNavigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/auth";
import Item from "./Item/Item";

import { clearItems } from "../../redux/slices/cartSlice";


function CheckOut() {
    const isAuth = useSelector(selectIsAuth);
    const { items, totalPrice } = useSelector((state) => state.cart);
    const userId = useSelector((state) => state.auth?.data?._id)
    const userEmail = useSelector((state) => state.auth?.data?.email)
    const fullName = useSelector((state) => state.auth?.data?.fullName)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wsConnection = new WebSocket('ws://localhost:8080')

    const [newFullName, setNewFullName] = useState(fullName)
    const [email, setEmail] = useState(userEmail)
    const [phone, setPhone] = useState("")
    const [pickUpPoint, setPickUpPoint] = useState("")
    const [comments, setComments] = useState("")
    const [deliveryOption, setDeliveryOption] = useState("point");
    const [paymentOption, setPaymentOption] = useState("cash");

    useEffect(() => {
        setNewFullName(fullName);
        setEmail(userEmail)
    }, [userEmail, fullName])

    const obj = {
        newFullName,
        email,
        phone,
        deliveryOption,
        pickUpPoint,
        comments,
        paymentOption,
        items
    }

    console.log(obj)

    const onCreateSale = () => {
        try {
            const data = axios.post("/orders", {
                userId: userId,
                products: items,
                fullName: newFullName,
                email,
                phone,
                deliveryOption,
                pickUpPoint,
                comments,
                paymentOption
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

                // dispatch(clearItems());
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
        <div className={s.main__block}>
            <h1 className={s.block__header}>
                BILLING DETAILS
            </h1>
            {isAuth ? "" : <div className={s.fieldset__block__contact}>Зарегестрируйтесь, чтобы получить баллы!</div>}
            <div>
                <form action="">
                    <fieldset className={s.fieldset__block__contact}>
                        <div>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" placeholder="Full Name" id="name" onChange={e => setNewFullName(e.target.value)} value={newFullName}/>
                        </div>
                    </fieldset>

                    <fieldset className={s.fieldset__block__contact}>
                        <div>
                            <label htmlFor="Email">Email</label>
                            <input type="text" placeholder="Email" id="Email" onChange={e => setEmail(e.target.value)} value={email}/>
                        </div>
                        <div>
                            <label htmlFor="Phone">Phone</label>
                            <input type="text" placeholder="Phone" id="Phone" onChange={e => setPhone(e.target.value)} />
                        </div>
                    </fieldset>

                    <fieldset className={s.radio__block}>
                        <legend>Выберите способ доставки:</legend>

                        <div>
                            <input type="radio" id="contactChoice1" name="contact" value="point" onChange={(e) => setDeliveryOption(e.target.value)} defaultChecked />
                            <label for="contactChoice1">Пункт выдачи</label>
                        </div>
                        <div>
                            <input type="radio" id="contactChoice2" name="contact" value="delivery" onChange={(e) => setDeliveryOption(e.target.value)} />
                            <label for="contactChoice2">До места назначения</label>
                        </div>
                    </fieldset>

                    {deliveryOption === "point" ?
                        <div className={s.select__block}>
                            <fieldset >
                                <select name="select" onChange={(e) => setPickUpPoint(e.target.value)}>
                                    <option value="">Select Pick-up Point</option>
                                    <option value="point1">г. Минск, ул. Рафиева, д. 42, кв. 24</option>
                                    <option value="point2">Point 2</option>
                                    <option value="point3">Point 3</option>
                                </select>
                            </fieldset>
                            <label for="Comments">Comments</label>
                            <div>
                                <input type="text" id="Comments" placeholder="Leave your comments..." onChange={(e) => setComments(e.target.value)} />
                            </div>
                        </div>
                        :
                        <div className={s.select__block}>
                            <fieldset>
                                <label htmlFor="Email">Country</label>
                                <select name="select">
                                    <option value="">Select Your Country</option>
                                    <option value="value1">Значение 1</option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                </select>

                                <label htmlFor="Address">Address</label>
                                <input type="text" placeholder="Address" id="Address" />

                            </fieldset>

                            <label for="Comments">Comments</label>
                            <div>
                                <input type="text" id="Comments" placeholder="Leave your comments..." onChange={(e) => setComments(e.target.value)} />
                            </div>
                        </div>
                    }



                    <div className={s.order__info__block}>
                        <h3>Your Order</h3>
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

                        <div className={s.total__price__wrapper}>
                            Сумма заказа: {totalPrice.toFixed(2)} BYN
                        </div>
                    </div>

                    <fieldset className={s.radio__block}>
                        <legend>Выберите способ оплаты:</legend>

                        <div>
                            <input type="radio" id="paymentChoice1" name="payment" value="cash" onChange={(e) => setPaymentOption(e.target.value)} defaultChecked />
                            <label for="paymentChoice1">Наличными</label>
                        </div>

                        <div>
                            <input type="radio" id="paymentChoice2" name="payment" value="website" onChange={(e) => setPaymentOption(e.target.value)} />
                            <label for="paymentChoice2">Через сайт</label>
                        </div>

                        <div>
                            <input type="radio" id="paymentChoice3" name="payment" value="cardInMoment" onChange={(e) => setPaymentOption(e.target.value)} />
                            <label for="paymentChoice3">Картой при получении</label>
                        </div>
                    </fieldset>


                    <button type="button" className={s.approve__button} onClick={onCreateSale}>Подтвердить заказ</button>

                </form>




            </div>
        </div>
    )
}

export default CheckOut;