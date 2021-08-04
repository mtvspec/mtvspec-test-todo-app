import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginError = '[Auth] Login Error',
  isAuthenticated = '[Auth] Is authenticated',
  Logout = '[Auth] Logout',
}

export class Login implements Action {
  public readonly type = AuthActionTypes.Login;
  constructor(public payload: { username: string; password: string; }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: any) {}
}

export class LoginError implements Action {
  readonly type = AuthActionTypes.LoginError;
  constructor(public payload: any) {}
}

export class IsAuthenticated implements Action {
  readonly type = AuthActionTypes.isAuthenticated;
  constructor(public payload: { isAuthenticated: boolean; token: string | null; }) {}
}

export class Logout implements Action {
  public readonly type = AuthActionTypes.Logout;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginError
  | IsAuthenticated
  | Logout;
