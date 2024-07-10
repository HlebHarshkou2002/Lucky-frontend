import React from "react";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import TwitterOutlined from "@ant-design/icons";
import FacebookFilled from "@ant-design/icons";
import InstagramOutlined from "@ant-design/icons";
import truckSvg from "../../images/About/truck.svg";
import headphoneSvg from "../../images/About/headphones.svg";
import resetSvg from "../../images/About/reset.svg";
import aboutusImg from "../../images/About/about-us.png";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <BreadCrumbs />
      <div className="about__container container">
        <div className="about__who">
          <div className="about__who-col">
            <div className="about__who-img">
              <img src={aboutusImg} alt="" />
            </div>
          </div>
          <div className="about__who-col">
            <h2 className="about__who-title">WHO WE ARE</h2>
            <p className="about__who-descr">
              Morem ipsum dolor sit amet, consectetur adipisci Reit, sed do
              eiusmod tempor incididuntut magna aliquaoe velit esse.
            </p>
            <p className="about__who-descr">
              Tummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release.
            </p>
            <p className="about__who-descr">
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
      </div>
      <div className="about__team">
        <h3 className="about__team-title">EXPERT TEAM</h3>
        <ul className="about__team-list">
          <li className="about__team-item">
            <div className="about__team-img">
              <img
                src="https://www.radiustheme.com/demo/html/metro/metro/img/team/1.png"
                alt=""
                className="about__team-img"
              />
              <ul className="about__socials">
                <li className="about__socials-item">
                  <TwitterOutlined />
                </li>
                <li className="about__socials-item">
                  <FacebookFilled />
                </li>
                <li className="about__socials-item">
                  <InstagramOutlined />
                </li>
              </ul>
            </div>
            <div className="about__team__name">JESSY RIO</div>
          </li>
          <li className="about__team-item">
            <div className="about__team-img">
              <img
                src="https://www.radiustheme.com/demo/html/metro/metro/img/team/1.png"
                alt=""
                className="about__team-img"
              />
              <ul className="about__socials">
                <li className="about__socials-item">
                  <TwitterOutlined />
                </li>
                <li className="about__socials-item">
                  <FacebookFilled />
                </li>
                <li className="about__socials-item">
                  <InstagramOutlined />
                </li>
              </ul>
            </div>
            <div className="about__team__name">JESSY RIO</div>
          </li>
          <li className="about__team-item">
            <div className="about__team-img">
              <img
                src="https://www.radiustheme.com/demo/html/metro/metro/img/team/1.png"
                alt=""
                className="about__team-img"
              />
              <ul className="about__socials">
                <li className="about__socials-item">
                  <TwitterOutlined />
                </li>
                <li className="about__socials-item">
                  <FacebookFilled />
                </li>
                <li className="about__socials-item">
                  <InstagramOutlined />
                </li>
              </ul>
            </div>
            <div className="about__team__name">JESSY RIO</div>
          </li>
          <li className="about__team-item">
            <div className="about__team-img">
              <img
                src="https://www.radiustheme.com/demo/html/metro/metro/img/team/1.png"
                alt=""
                className="about__team-img"
              />
              <ul className="about__socials">
                <li className="about__socials-item">
                  <TwitterOutlined />
                </li>
                <li className="about__socials-item">
                  <FacebookFilled />
                </li>
                <li className="about__socials-item">
                  <InstagramOutlined />
                </li>
              </ul>
            </div>
            <div className="about__team__name">JESSY RIO</div>
          </li>
        </ul>
      </div>
      <div className="about__container container">
        <ul className="about__support">
          <li className="about__support-item">
            <div className="about__support-icon">
              <img src={truckSvg} alt="" />
            </div>
            <h4 className="about__support-heading">FREE SHIPPING</h4>
            <p className="about__support-descr">On All Orders</p>
          </li>
          <li className="about__support-item">
            <div className="about__support-icon">
              <img src={headphoneSvg} alt="" />
            </div>
            <h4 className="about__support-heading">24/7 SERVICE</h4>
            <p className="about__support-descr">Get Help When You Need</p>
          </li>
          <li className="about__support-item">
            <div className="about__support-icon">
              <img src={resetSvg} alt="" />
            </div>
            <h4 className="about__support-heading">100% MONEY BACK</h4>
            <p className="about__support-descr">Within 30 Day Guarantee</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
