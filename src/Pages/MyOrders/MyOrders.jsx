import axios from "../../redux/axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Order from "./Order/Order";

import s from "./MyOrders.module.scss"

function MyOrders() {
    const { id } = useParams();
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState();

    React.useEffect(() => {
        axios
            .get(`/orders/user/${id}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert("Ошибка при получении товара");
            });

    }, [])

    return (
        <div>
            <h1>Мои заказы</h1>
            <div>
                {isLoading ? "Loading" :
                    <table className={s.block} border="1" bordercolor="#f0f0f0">
                        <tr className={s.header}>
                            <th className={s.header__item}>Идентификатор заказа</th>
                            <th className={s.header__item}>Покупатель</th>
                            <th className={s.header__item}>Дата заказа</th>
                            <th className={s.header__item}>Статус</th>
                        </tr>

                        {data.map((order) => (
                            <Order id={order._id} userName={order.user.fullName} dateOfOrder={order.createdAt} orderStatus={order.orderStatus} products={order.products} orderStatus={order.orderStatus} />
                        ))}

                    </table>}
            </div>
        </div>
    )
}

export default MyOrders;