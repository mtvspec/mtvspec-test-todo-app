import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getLoginInFly = createSelector(
  getAuthState,
  state => state.loginInFly,
);

export const getIsAuthenticated = createSelector(
  getAuthState,
  state => state.isAuthenticated,
);

export const getToken = createSelector(
  getAuthState,
  state => state.token,
);
