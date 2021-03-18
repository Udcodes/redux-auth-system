import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../features/userSlice';
import styles from './logout.module.scss';

export const Logout = () => {
  const { name } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   dispatch({ name: '', email: '', password: '', loggedIn: false });
  // };

  return (
    <div>
      <h1 className={styles.user__name}>
        Welcome{' '}
        <span>
          Udochi
          {name}
        </span>
      </h1>
      <button
        type="submit"
        className={styles.logout__btn}
        onClick={(e) => {
          e.preventDefault();
          dispatch({ name: '', email: '', password: '', loggedIn: false });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
