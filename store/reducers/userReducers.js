import * as types from '../types';

const initialState = {
  name: '',
  email: '',
  password: '',
  loggedIn: false,
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        name: state.name,
        email: state.email,
        password: state.password,
        loggedIn: state.loggedIn,
      };
    case types.LOGOUT_USER:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};
