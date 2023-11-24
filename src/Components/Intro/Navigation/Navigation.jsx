import React from "react";
import s from "./Navigation.module.scss";

import StudentPhoto from "../../../images/Categories/student__banner.png";

function Navigation() {
  return (
    <div className={s.navigation__block}>
      <nav className={s.nav__wrapper}>
        <span>Home</span>
        <span>About</span>
        <span>Courses</span>
        <span>Contact</span>
      </nav>

      <div className={s.intro__banner}>
        <div className={s.banner__content}>
          <div className={s.intro__banner__title}>All courses</div>
          <div className={s.intro__banner__suptitle}>ONLY 1$ DOLLAR</div>
          <button className={s.banner__button}>View more</button>
        </div>

        <img
          src={StudentPhoto}
          alt="student__photo"
          className={s.student__photo}
        />
      </div>
    </div>
  );
}

export default Navigation;
