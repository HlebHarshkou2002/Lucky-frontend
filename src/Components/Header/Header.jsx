import React from "react";
import s from "./Header.module.scss";
import basketIcon from "../../images/Header/basket-icon.png";
import logoImg from "../../images/Header/logo.png";
import MenuBurger from "../MenuBurger/MenuBurger";

import emailImg from "../../images/Header/email-icon.png";
import lockImg from "../../images/Header/lock-icon.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={s.header__wrapper}>
      <div className={s.account__header__wrapper}>
        <div className={s.account__header}>
          <div className={s.email__info}>
            <img src={emailImg} alt="email" />
            <span>{props.email}</span>
          </div>

          <Link to="/login" className={s.auth__info}>
            <img src={lockImg} alt="lock" />
            <span>Account</span>
          </Link>
        </div>
      </div>

      <Link to="/" className={s.logo__wrapper}>
          <div className={s.logo}></div>
          <span>Lucky</span>
      </Link>

      <div className={s.search__wrapper}>
        <div className={s.search__input__wrapper}>
          <input type="search" placeholder="Search Courses" />
        </div>

        <div className={s.select__categories__wrapper}>
          <select name="All categories" id="All categories">
            <option value="1">All categories</option>
            <option value="2">Programming</option>
          </select>
        </div>

        <Link to="/search" className={s.submit__wrapper}>
          <input type="submit" value=""></input>
        </Link>
      </div>

      <div className={s.menu__wrapper}>
        <div className={s.basket__wrapper}>
          <img src={basketIcon} alt="basket" />
        </div>
        <MenuBurger isWhite={false} />
      </div>
    </div>
  );
}

export default Header;
