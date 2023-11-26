import React from "react";
import s from "./Login.module.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={s.login__block__wrapper}>
      <div className={s.login__block__bg}>
        <div className={s.login__block}>
          <Link to="/" className={s.exit}>
            X
          </Link>

          <div className={s.login__title}>Sign Up</div>

          <div className={s.login__fields}>
            <div>
              <input type="text" placeholder="Login" />
            </div>
            <div>
              <input type="text" placeholder="Password" />
            </div>

            <div>
              <button className={s.login__button}>Login</button>
            </div>

            <Link to="/registration" className={s.registation__title}>
              Registation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
