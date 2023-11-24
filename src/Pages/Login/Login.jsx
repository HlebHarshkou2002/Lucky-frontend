import React from "react";
import s from "./Login.module.scss";

function Login() {
  return (
    <div className={s.login__block__wrapper}>
      {/* <div className={s.login__block__bg}></div> */}

      <div className={s.login__block}>
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
        </div>

        <div className={s.registation__title}>Registation</div>
      </div>
    </div>
  );
}

export default Login;
