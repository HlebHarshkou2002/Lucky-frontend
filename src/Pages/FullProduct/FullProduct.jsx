import React from "react";
import s from "./FullProduct.module.scss";
import { useParams } from "react-router-dom";
import axios from "../../redux/axios";

import startImg from "../../images/FullProduct/star.png"
import { addItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function FullProduct() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const { id } = useParams();

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении товара");
      });
  }, []);

  if (isLoading) {
    return "Loading";
  }

  const onClickAddProduct = () => {
    dispatch(addItem(data));
  };

  const getStars = () => {
    let content = [];
    for(let i = 0; i < data.rating; i++) {
        content.push(<img src={startImg} alt="" />)
    }
    return content;
  }

  return (
    <div className={s.product__block}>
      <div className={s.product__images}>
        <div className={s.product__image}>
          <img src={data.imgUrl} alt="" />
        </div>
        <div className={s.option__images}>
            <div className={s.option__item}>
                <img src={data.imgUrl} alt="" />
            </div>
            <div className={s.option__item}>
                <img src={data.imgUrl} alt="" />
            </div>
            <div className={s.option__item}>
                <img src={data.imgUrl} alt="" />
            </div>
        </div>
      </div>

      <div className={s.content__wrapper}>
        <div>
            <h3 className={s.product__title}>{data.title}</h3>
        </div>
        <div className={s.stars__wrapper}>
            {getStars()}
        </div>
        <div className={s.price}>
            ${data.price}
        </div>
        <div className={s.description}>
            {data.description}
        </div>

        <div className={s.complexity}>
            <span>COMPLEXITY: </span>{data.complexity}
        </div>

        <div className={s.categories}>
            <span>CATEGORIES: </span>{data.categories.join(", ")}
        </div>

        <div className={s.ageRestriction}>
            <span>Age Restriction: </span>{data.ageRestriction} y.o.
        </div>

        <div className={s.author}>
            <span>Author: </span>{data.author}
        </div>

        <div className={s.btns__wrapper}>
            <div className={s.add__btn}>
                <button onClick={onClickAddProduct}>ADD TO CART</button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default FullProduct;
