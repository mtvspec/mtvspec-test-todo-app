import { createSelector, createFeatureSelector } from '@ngrx/store';

import { TaskState } from './task.state';

export const getTaskState = createFeatureSelector<TaskState>('tasks');

export const getTasks = createSelector(
  getTaskState,
  state => state.tasks,
);

export const getIsLoading = createSelector(
  getTaskState,
  state => state.isLoading,
);

export const getError = createSelector(
  getTaskState,
  state => state.error,
);

export const createTaskOperationInFly = createSelector(
  getTaskState,
  state => state.createTask.operationInFly,
);

export const createTaskOperationPayload = createSelector(
  getTaskState,
  state => state.createTask.payload,
);

export const currentTask = createSelector(
  getTaskState,
  state => state.currentTask,
);

export const editTaskOperationInFly = createSelector(
  getTaskState,
  state => state.editTask.operationInFly,
);

export const editTaskOperationPayload = createSelector(
  getTaskState,
  state => state.editTask.payload,
);
