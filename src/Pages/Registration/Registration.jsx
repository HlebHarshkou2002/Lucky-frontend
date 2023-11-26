import React from "react";
import s from "./Registration.module.scss";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className={s.registration__block__wrapper}>
      <div className={s.registration__block__bg}>

        <div className={s.registration__block}>
          <Link to="/" className={s.exit}>
            X
          </Link>
          <div className={s.registration__title}>Registration</div>

          <div className={s.registration__fields}>
            <div>
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Password" />
            </div>

            <div>
              <button className={s.registration__button}>Register</button>
            </div>

            <Link to="/login" className={s.registation__title}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
