export const FETCH_USER_LOGIN = 'FETCH_USER_LOGIN';
export const USER_LOG_OUT = 'USER_LOG_OUT'
export const doLogin = (data) => {
  return {
    type: FETCH_USER_LOGIN,
    payload: data,
  };
};

export const doLogout = () => {
  return {
    type: USER_LOG_OUT,
    payload: {},
  };
};
