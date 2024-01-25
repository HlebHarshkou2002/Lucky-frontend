import React from "react";
import s from "./Discount.module.scss";

import studentImg from "../../images/Discount/student-smile 1.png";

function Discount() {
  return (
    <div className={s.discount__block}>
      <div className={s.discount__wrapper}></div>

      <div className={s.discount__content__wrapper}>
        <div className={s.discount__content}>
          <h1>COLLECTIONS OF COURSES</h1>
          <span>50% OFF</span>
          <p>SALE GOING ON</p>
          <button>BUY NOW</button>
        </div>

        <div className={s.time__wrapper}>
          <div className={s.time__item}>
            <span className={s.time}>01</span>
            <span className={s.type}>DAY</span>
          </div>

          <div className={s.time__item}>
            <span className={s.time}>11</span>
            <span className={s.type}>HOUR</span>
          </div>

          <div className={s.time__item}>
            <span className={s.time}>59</span>
            <span className={s.type}>MINUTES</span>
          </div>

          <div className={s.time__item}>
            <span className={s.time}>23</span>
            <span className={s.type}>SECONDS</span>
          </div>
        </div>

        <img src={studentImg} alt="student image" />
      </div>
    </div>
  );
}

export default Discount;
