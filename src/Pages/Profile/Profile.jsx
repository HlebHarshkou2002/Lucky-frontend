import React from "react";
import s from "./Profile.module.scss";
import userImg from "./../../images/Registration/user.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "../../redux/slices/auth";

function Profile() {
  const user = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div>
      {user ? (
        <div className={s.profile__block}>
          <div className={s.profile__image__wrapper}>
            <img src={userImg} alt="" />
          </div>
          <div className={s.profile__content__wrapper}>
            <div className={s.profile__name}>{user.fullName}</div>
            <div className={s.profile__email}>
              <span>Email:</span> {user.email}
            </div>
            <div className={s.profile__date}>
              <span>Registration date:</span> {user.createdAt}
            </div>
            <div className={s.profile__date}>
              <span>id:</span> {user._id}
            </div>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default Profile;
