import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
// import initStore from '../app/index';
import store from '../store/store';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
const makeStore = () => store;

const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
