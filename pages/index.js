import { useSelector } from 'react-redux';
import Login from '../components/Login/Login';
import Logout from '../components/Logout/Logout';
import styles from '../styles/Home.module.scss';

export const Home = () => {
  const user = useSelector((state) => state);
  return <div className={styles.container}>{user ? <Logout /> : <Login />}</div>;
};

export default Home;
