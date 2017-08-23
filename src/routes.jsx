import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
  // IndexRoute,
} from 'react-router-dom';

// import {injectReducer} from 'REDUCER';

import {
  App,
  Dashboard,
  Login,
} from 'COMPONENT';

// import createContainer from 'UTIL/createContainer';

// import store from 'STORE';

import data from './assets/data.json';
import less from './styles/style.less';


// if (!localStorage.getItem('user')) {
//   console.log('==========', this);
// }

// const Dashboard = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('./components/Dashboard').default);
//   }, 'dashboard');
// };

// const Login = require.ensure([], require => {
//       // 立即注入 Reducer
//   injectReducer('user', require('REDUCER/user').default);

//   cb(null, require('COMPONENT/Login').default);
// }, 'loginForm');

/* 进入路由的判断 */
// function isLogin(nextState, replaceState) {
//   const token = sessionStorage.getItem('token');
//   if (!token) {
//     replaceState('/login');
//     // hashHistory.push('/login')
//   }
// }
// onEnter={isLogin}
// <IndexRoute component={Welcome} />
// <Route path="/" component={App}>
//   <Route path="/dashboard" getComponent={Dashboard} />
// </Route>
// console.log(store.getState());

const PrivateRoute = ({component: Component, ...rest}) => ( // eslint-disable-line
  <Route
    {...rest}
    render={props => // eslint-disable-line
    localStorage.getItem('userData') ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: {from: props.location},
      }}
      />
    )
  }
  />
);

const clearToken = () => {
  console.log('=== clearToken ===');
  // localStorage.removeItem('token');
};

const routes = (
  <App className={less.lol} data={data}>
    <Route exact path="/" onEnter={clearToken} component={Login} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    {/* <Route path="/dashboard" component={Dashboard} /> */}
  </App>
);

PrivateRoute.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

PrivateRoute.defaultProps = {
  location: undefined,
};

export default routes;
