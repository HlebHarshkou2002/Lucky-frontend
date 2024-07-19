import React from "react";
import s from "./Order.module.scss"
import { NavLink } from "react-router-dom";

function Order(props) {
    return (

        <tr className={s.order__wrapper}>

            <td><NavLink to={`/orders/${props.id}`}>{props.id}</NavLink></td>
            <td>{props.userName}</td>
            <td>{new Date(props.dateOfOrder).toLocaleDateString()}</td>
            <td>
                {
                    (props.orderStatus === "process") ?
                        (
                            <div>
                                <div className={s.status__process}>

                                </div>
                                {" "}
                                <span>
                                    Собирается
                                </span>
                            </div>

                        )
                        :
                        ((props.orderStatus === "ready") ?
                            (
                                <div>
                                    <div className={s.status__ready}>
                                    </div>
                                    {" "}
                                    <span>
                                        Готов к выдаче
                                    </span>
                                </div>
                            )

                            :
                            <div>
                                <div className={s.status__success}>
                                </div>
                                {" "}
                                <span>
                                    Оплачен
                                </span>
                            </div>

                        )
                }
            </td>


        </tr>
    )
}

export default Order;