import { FETCH_USER_LOGIN, USER_LOG_OUT } from '../action/userAction';

const INITIAL_STATE = {
  account: {
    access_token: '',
    refresh_token: '',
    username: '',
    firstName: '',
    lastName: '',
    role: '',
    avatar: '',
  },
  isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        account: {
          access_token: action?.payload?.data?.accessToken,
          refresh_token: action?.payload?.data?.refreshToken,
          username: action?.payload?.data?.username,
          firstName: action?.payload?.data?.firstName,
          lastName: action?.payload?.data?.lastName,
          role: action?.payload?.data?.role,
          avatar: action?.payload?.data?.avatar,
        },
        isAuthenticated: true,
      };
    case USER_LOG_OUT:
      return {
        ...state,
        account: {
          access_token: '',
          refresh_token: '',
          username: '',
          firstName: '',
          lastName: '',
          role: '',
          avatar: '',
        },
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
