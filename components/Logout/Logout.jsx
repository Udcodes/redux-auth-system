import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../features/userSlice';
import styles from './logout.module.scss';

export const Logout = () => {
  const user = useSelector((state) => state.state.user);
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <div>
      <h1 className={styles.user__name}>
        Welcome{' '}
        <span>
          Udochi
          {user.name}
        </span>
      </h1>
      <button type="submit" className={styles.logout__btn} onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
