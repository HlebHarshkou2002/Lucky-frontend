import React from "react";
import s from "./MenuSidebar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth";
import logoutImg from "./../../images/Header/logout.png"

function MenuSidebar() {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };


  return (
    <div className={s.sidebar__block}>
      <div className={s.sidebar__block__wrapper}>
        <div className={s.menu__item}>
          <NavLink to="/profile" className={s.menu__link}>Profile</NavLink>
        </div>
        <div className={s.menu__item}>
          <NavLink to="/orders" className={s.menu__link}>My Orders</NavLink>
        </div>
        <div className={s.menu__item}>
          <button to="/" className={s.menu__link} onClick={onClickLogout}>Logout <img src={logoutImg} alt="logout" /></button>
        </div>
      </div>
    </div>
  );
}

export default MenuSidebar;
