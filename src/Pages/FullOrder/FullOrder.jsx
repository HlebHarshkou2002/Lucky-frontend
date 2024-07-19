import React from "react";
import { useParams } from "react-router-dom";
import axios from "../../redux/axios";
import s from "./FullOrder.module.scss"

import Product from "../../Components/Product/Product";



function FullOrder() {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState();
    const { id } = useParams();

    React.useEffect(() => {
        axios
            .get(`/orders/${id}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert("Ошибка при получении заказа");
            });
    }, []);

    if (isLoading) {
        return "Loading";
    }

    console.log(data);

    return (
        <div className={s.order__block}>
            <h2 level={3}>Заказ {data._id}</h2>
            <div>
                <h5 level={5} className={s.supply__date}>
                    Дата создания:
                </h5>

                {new Date(data.createdAt).getDate() + "."}
                {new Date(data.createdAt).getMonth() + "."}
                {new Date(data.createdAt).getFullYear()}
            </div>
            <div>
                <h5 level={5} className={s.supply__date}>
                    Покупатель:
                </h5>
                {data.user?.fullName ? data.user.fullName : "Пользователь удалён"}
            </div>
            <div>
                <h5 level={5} className={s.supply__date}>
                    Статус заказа:
                </h5>
                {data.orderStatus}
            </div>
            <table className={s.sales__wrapper} border="1" bordercolor="#f0f0f0">
                <tr className={s.header}>
                    <th className={s.header__item}>Фото товара</th>
                    <th className={s.header__item}>Наименование товара</th>
                    <th className={s.header__item}>Производитель</th>
                    <th className={s.header__item}>Цена на сайте(BYN)</th>
                </tr>
                {data.products.map((product) => (
                    <Product
                        _id={product._id}
                        title={product.title}
                        imgUrl={product.imgUrl}
                        author={product.author}
                        price={product.price}
                    />
                ))}
            </table>
        </div>
    )
}

export default FullOrder;