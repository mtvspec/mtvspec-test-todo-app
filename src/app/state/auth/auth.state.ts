
export interface AuthState {
  loginInFly: boolean;
  isAuthenticated: boolean;
  token: string | null;
}

export const authInitialState: AuthState = {
  loginInFly: false,
  isAuthenticated: false,
  token: null,
};
