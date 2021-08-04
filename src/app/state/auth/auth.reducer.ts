import { authInitialState, AuthState } from './auth.state';
import { AuthActions, AuthActionTypes } from './auth.actions';

export function authReducer(state: AuthState = authInitialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return Object.assign({}, state, {
        loginInFly: true,
      });
    case AuthActionTypes.LoginSuccess:
      return Object.assign({}, state, {
        loginInFly: false,
        isAuthenticated: true,
        token: action.payload.message.token,
      });
    case AuthActionTypes.isAuthenticated:
      return Object.assign({}, state, {
        isAuthenticated: action.payload.isAuthenticated,
        token: action.payload.token,
      });
    case AuthActionTypes.LoginError:
      return Object.assign({}, state, {
        loginInFly: false,
        isAuthenticated: true,
        message: action.payload,
      });
    case AuthActionTypes.Logout:
      localStorage.clear();
      return Object.assign({}, state, {
        isAuthenticated: false,
        token: null,
      });
    default:
      return state;
  }
}
