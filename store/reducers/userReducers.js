import * as types from '../types';

const initialState = {
  user: { name: '', email: '', password: '', loggedIn: false },
};

export const userReducers = (state = initialState.user, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: {
          state: action.payload,
        },
        // logout: () => {
        //   state = null;
        // },
      };
    // return {
    //   ...state,
    //   user: action.payload,
    // };

    default:
      return { ...state };
  }
};
