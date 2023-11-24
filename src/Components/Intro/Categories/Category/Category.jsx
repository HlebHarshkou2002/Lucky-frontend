import React from "react";
import s from "./Category.module.scss";

function Category(props) {
  return (
    <>
      <div className={s.category}>
        <div className={s.category__icon}>
          <img src={props.icon} alt="category_icon" />
        </div>
        <div className={s.category__title}>
            {props.title}
        </div>
      </div>
    </>
  );
}

export default Category;
