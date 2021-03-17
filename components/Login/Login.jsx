import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './login.module.scss';

export const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  console.log(dispatch);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      user: {
        name,
        email,
        password,
        loggedIn: true,
      },
    });
  };

  return (
    <div className={styles.login}>
      <form action="" className={styles.login__form} onSubmit={handleSubmit}>
        <h1>Login Here🚨</h1>
        <input
          type="name"
          value={name}
          placeholder="Name"
          name="firstName"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.submit__btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
