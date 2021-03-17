import { useDispatch, useSelector } from 'react-redux';
import Login from '../components/Login/Login';
import Logout from '../components/Logout/Logout';
// import { selectUser } from '../features/userSlice';
import { getUser } from '../store/actions/userActions';
import styles from '../styles/Home.module.scss';

export const Home = () => {
  const dispatch = useDispatch();
  dispatch(getUser);
  const { user } = useSelector((state) => state.user);
  return <div className={styles.container}>{user ? <Logout /> : <Login />}</div>;
};

export default Home;
