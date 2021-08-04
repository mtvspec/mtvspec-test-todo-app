import {
  ActionReducerMap,
  MetaReducer,
  ActionReducer,
  Action
} from '@ngrx/store';

import * as fromAuth from '../state/auth';

import * as fromTask from '../state/task';

// tslint:disable-next-line:no-empty-interface
export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  tasks: fromTask.taskReducer,
  auth: fromAuth.authReducer,
};

export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state: AppState | undefined, action: Action): AppState => {
    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<AppState>[] = [clearState];
