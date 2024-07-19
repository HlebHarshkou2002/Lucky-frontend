import React from "react";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import { TwitterOutlined } from "@ant-design/icons";
import { FacebookFilled } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import truckSvg from "../../images/About/truck.svg";
import headphoneSvg from "../../images/About/headphones.svg";
import resetSvg from "../../images/About/reset.svg";
import aboutusImg from "../../images/About/about-us.png";
import s from "./About.module.scss";
const About = () => {
  return (
    <div className="about">
      <BreadCrumbs />
      <section className={s.who}>
        <div className={`${s.container} ${s.who__container}`}>
          <div className={s.who__col}>
            <div className={s["who__col-img"]}>
              <img src={aboutusImg} alt="" />
            </div>
          </div>
          <div className={s.who__col}>
            <h2 className={s.who__title}>WHO WE ARE</h2>
            <p className={s.who__descr}>
              Morem ipsum dolor sit amet, consectetur adipisci Reit, sed do
              eiusmod tempor incididuntut magna aliquaoe velit esse.
            </p>
            <p className={s.who__descr}>
              Tummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release.
            </p>
            <p className={s.who__descr}>
              Hmmy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release ver since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic.
            </p>
          </div>
        </div>
      </section>
      <section className={s.team}>
        <h3 className={s.team__title}>EXPERT TEAM</h3>
        <ul className={s.team__list}>
          <li className={s.team__item}>
            <div className={s["list__item-img"]}>
              <img
                src="https://www.radiustheme.com/demo/html/metro/metro/img/team/1.png"
                alt=""
                className={s["team__team-img"]}
              />
              <ul className={s.team__socials}>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <TwitterOutlined />
                  </a>
                </li>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <FacebookFilled />
                  </a>
                </li>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <InstagramOutlined />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s["team__item-name"]}>JESSY RIO</div>
            <div className={s["team__item-prof"]}>DESIGNER</div>
          </li>
          <li className={s.team__item}>
            <div className={s["list__item-img"]}>
              <img
                src="https://www.radiustheme.com/demo/html/metro/metro/img/team/1.png"
                alt=""
                className={s["team__team-img"]}
              />
              <ul className={s.team__socials}>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <TwitterOutlined />
                  </a>
                </li>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <FacebookFilled />
                  </a>
                </li>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <InstagramOutlined />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s["team__item-name"]}>JESSY RIO</div>
            <div className={s["team__item-prof"]}>DESIGNER</div>
          </li>
          <li className={s.team__item}>
            <div className={s["list__item-img"]}>
              <img
                src="https://www.radiustheme.com/demo/html/metro/metro/img/team/1.png"
                alt=""
                className={s["team__team-img"]}
              />
              <ul className={s.team__socials}>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <TwitterOutlined />
                  </a>
                </li>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <FacebookFilled />
                  </a>
                </li>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <InstagramOutlined />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s["team__item-name"]}>JESSY RIO</div>
            <div className={s["team__item-prof"]}>DESIGNER</div>
          </li>
          <li className={s.team__item}>
            <div className={s["list__item-img"]}>
              <img
                src="https://www.radiustheme.com/demo/html/metro/metro/img/team/1.png"
                alt=""
                className={s["team__team-img"]}
              />
              <ul className={s.team__socials}>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <TwitterOutlined />
                  </a>
                </li>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <FacebookFilled />
                  </a>
                </li>
                <li className={s["team__socials-item"]}>
                  <a href="#" className={s["team__socials-link"]}>
                    <InstagramOutlined />
                  </a>
                </li>
              </ul>
            </div>
            <div className={s["team__item-name"]}>JESSY RIO</div>
            <div className={s["team__item-prof"]}>DESIGNER</div>
          </li>
        </ul>
      </section>
      <section className={s.support}>
        <div className={`${s.support__container} container`}>
          <ul className={s.support__list}>
            <li className={s.support__item}>
              <div className={s["support__item-icon"]}>
                <img src={truckSvg} alt="" />
              </div>
              <div className={s["support__item-info"]}>
                <h4 className={s["support__item-heading"]}>FREE SHIPPING</h4>
                <p className={s["support__item-descr"]}>On All Orders</p>
              </div>
            </li>
            <li className={s.support__item}>
              <div className={s["support__item-icon"]}>
                <img src={headphoneSvg} alt="" />
              </div>
              <div className={s["support__item-info"]}>
                <h4 className={s["support__item-heading"]}>24/7 SERVICE</h4>
                <p className={s["support__item-descr"]}>
                  Get Help When You Need
                </p>
              </div>
            </li>
            <li className={s.support__item}>
              <div className={s["support__item-icon"]}>
                <img src={resetSvg} alt="" />
              </div>
              <div className={s["support__item-info"]}>
                <h4 className={s["support__item-heading"]}>100% MONEY BACK</h4>
                <p className={s["support__item-descr"]}>
                  Within 30 Day Guarantee
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
