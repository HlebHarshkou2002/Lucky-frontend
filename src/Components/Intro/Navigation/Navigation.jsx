import React from "react";
import s from "./Navigation.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import StudentPhoto from "../../../images/Categories/student__banner.png";
import { Navigation as NavigationSlider } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './sliderStyle.scss';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className={s.navigation__block}>
      <nav className={s.nav__wrapper}>
        <span>Home</span>
        <span><Link to="/about" className={s.menu__link}>About</Link></span>
        <span>Courses</span>
        <span>Contact</span>
      </nav>
      <div className="slider__block">
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[NavigationSlider]}
        className={s.navigation__slider}
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}

export default Navigation;
