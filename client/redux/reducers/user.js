import {
  LOGIN_SUCCEEDED,
  LOGOUT
} from '../actions';

const initialState = {
  name: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return Object.assign(
        {},
        state,
        {
          name: action.user,
          id: action.userId,
          token: action.token
        }
      );
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
