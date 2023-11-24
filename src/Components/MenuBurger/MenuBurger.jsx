import React from "react";
import s from "./MenuBurger.module.scss";

function MenuBurger(props) {
  return (
    <>
      <div className={s.menu__btn}>
        <span className={props.isWhite ? s.menu__white : ""}></span>
      </div>
    </>
  );
}

export default MenuBurger;
