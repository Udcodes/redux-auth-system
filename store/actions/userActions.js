import * as types from '../types';

export const getUser = (name, email, password, loggedIn) => (dispatch) => {
  dispatch({
    type: types.GET_USER,
    payload: { name, email, password, loggedIn },
  });
};
