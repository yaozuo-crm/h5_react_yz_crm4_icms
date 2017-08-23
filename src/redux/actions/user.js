import authService from 'SERVICE/authService';
import {Toast} from 'antd-mobile';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const loginDone = userData => ({
  type: LOG_IN,
  payload: userData,
});

const login = da => dispatch => {
  authService
    .constructor
    .login(da.formData)
    .then(re => {
      if (re.success) {
        localStorage.setItem('userData', JSON.stringify({
          pid: re.pid,
          token: re.token,
        }));

        Toast.success('登录成功', 1);
        da.history.push('/dashboard');
      } else {
        Toast.fail(re.info, 1);
      }

      return dispatch(loginDone(re.pid ? {pid: re.pid} : null));
    });
};

const checkLogin = () => dispatch => {
  authService
    .constructor
    .checkLogin()
    .then(re => {
      if (!re) return;
      dispatch(loginDone(re));
    });
};

const logout = () => dispatch => {
  authService
    .logout()
    .then(() =>
      dispatch({
        type: LOG_OUT,
      })
    );
};

export default {
  login, checkLogin, logout,
};

export const ACTION_HANDLERS = {
  [LOG_IN]: (userData, {payload}) => payload,
  [LOG_OUT]: () => null,
};
