import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

import basketIcon from "../../images/Header/basket-icon.png";
import logoImg from "../../images/Header/logo.png";
import MenuBurger from "../MenuBurger/MenuBurger";

import emailImg from "../../images/Header/email-icon.png";
import lockImg from "../../images/Header/lock-icon.png";
import { logout, selectIsAdmin, selectIsAuth } from "../../redux/slices/auth";
import MenuSidebar from "../MenuSidebar/MenuSidebar";
import HeartImg from './../../images/Header/heart.png'

function Header(props) {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);
  const navigate = useNavigate();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const [isFixedHeaderFlag, setIsFixed] = useState(false);
  const [isVisibleSideMenu, setVisibilitySideMenu] = useState(false);

  const switchVisibilityMenu = () => {
    console.log(isVisibleSideMenu);
    if (isVisibleSideMenu === true) {
      setVisibilitySideMenu(false);
    } else {
      setVisibilitySideMenu(true);
    }
  };

  // Header fixed
  const isFixedHeader = () => {
    if (window.scrollY > 150) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  window.addEventListener("scroll", isFixedHeader);

  const handleSearchValueChange = (e) => {
    navigate("/products");
    props.setSearchValue(e.target.value);

    if (e.target.value === "") {
      navigate("/");
    }
  };

  return (
    <div className={s.header__block}>
      <div className={s.account__header__wrapper}>
        <div className={s.account__header}>
          <div className={s.email__info}>
            <img src={emailImg} alt="email" />
            <span>{props.email}</span>
          </div>
          <div>
            {isAuth ? (
              <div className={s.auth__info__details}> <img src={HeartImg} alt="" /> Wishlist | <span>$</span> USD</div>
            ) : (
              <Link to="/login" className={s.auth__info}>
                <img src={lockImg} alt="lock" />
                <span>Account</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className={s.header__wrapper}>
        <div className={s.header__inner__wrapper}>
          <Link to="/" className={s.logo__wrapper}>
            <div className={s.logo}></div>
            <span>Lucky</span>
          </Link>

          <div className={s.search__wrapper}>
            <div
              className={s.search__input__wrapper}
              onChange={handleSearchValueChange}
              value={props.searchValue}
            >
              <input type="search" placeholder="Search Courses" />
            </div>

            <div className={s.select__categories__wrapper}>
              <select name="All categories" id="All categories">
                <option value="1">All categories</option>
                <option value="2">Programming</option>
              </select>
            </div>

            <Link to="/products" className={s.submit__wrapper}>
              <input type="submit" value=""></input>
            </Link>
          </div>

          <div className={s.menu__wrapper}>
            <div className={s.basket__wrapper}>
              <Link to="/basket">
                <img src={basketIcon} alt="basket" />
              </Link>
              <span className={s.items__count}>{items.length}</span>
            </div>

            {isVisibleSideMenu ? (
              <div className={s.hide__menu} onClick={switchVisibilityMenu}>
                X
              </div>
            ) : (
              <MenuBurger isWhite={false} onClick={switchVisibilityMenu} />
            )}
          </div>
        </div>
      </div>

      {isFixedHeaderFlag ? (
        <div className={s.header__wrapper_fixed}>
          <div className={s.header__inner__wrapper}>
            <Link to="/" className={s.logo__wrapper}>
              <div className={s.logo}></div>
              <span>Lucky</span>
            </Link>

            <div className={s.search__wrapper}>
              <div
                className={s.search__input__wrapper}
                onChange={handleSearchValueChange}
                value={props.searchValue}
              >
                <input type="search" placeholder="Search Courses" />
              </div>

              <div className={s.select__categories__wrapper}>
                <select name="All categories" id="All categories">
                  <option value="1">All categories</option>
                  <option value="2">Programming</option>
                </select>
              </div>

              <Link to="/products" className={s.submit__wrapper}>
                <input type="submit" value=""></input>
              </Link>
            </div>

            <div className={s.menu__wrapper}>
              <div className={s.basket__wrapper}>
                <Link to="/basket">
                  <img src={basketIcon} alt="basket" />
                </Link>
                <span className={s.items__count}>{items.length}</span>
              </div>
              {isVisibleSideMenu ? (
              <div className={s.hide__menu} onClick={switchVisibilityMenu}>
                X
              </div>
            ) : (
              <MenuBurger isWhite={false} onClick={switchVisibilityMenu} />
            )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {isVisibleSideMenu ? <MenuSidebar /> : ""}
    </div>
  );
}

export default Header;
