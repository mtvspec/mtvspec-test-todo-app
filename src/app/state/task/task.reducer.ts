import { taskInitialState, TaskState } from './task.state';
import { TaskActions, TaskActionTypes } from './task.actions';

export function taskReducer(state: TaskState = taskInitialState, action: TaskActions): TaskState {
  switch (action.type) {
    case TaskActionTypes.GET_ALL_TASKS:
      return Object.assign({}, state, {
        isLoading: true
      });

    case TaskActionTypes.GET_ALL_TASKS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        tasks: action.payload,
      });

    case TaskActionTypes.GET_ALL_TASKS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload.message,
      });

    case TaskActionTypes.CREATE_TASK:
      return Object.assign({}, state, {
        createTask: {
          operationInFly: true,
        }
      });

    case TaskActionTypes.CREATE_TASK_SUCCESS:
      return Object.assign({}, state, {
        createTask: {
          operationInFly: false,
          payload: action.payload,
        }
      });

    case TaskActionTypes.CREATE_TASK_ERROR:
      return Object.assign({}, state, {
        createTask: {
          operationInFly: false,
          payload: action.payload,
        }
      });

    case TaskActionTypes.CREATE_TASK_OPERATION:
      return Object.assign({}, state, {
        createTask: {
          payload: action.payload,
        }
      });

    case TaskActionTypes.SET_CURRENT_TASK:
      return Object.assign({}, state, {
        currentTask: action.payload
      });

    case TaskActionTypes.EDIT_TASK:
      return Object.assign({}, state, {
        editTask: {
          operationInFly: true,
        }
      });

    case TaskActionTypes.EDIT_TASK_SUCCESS:
      return Object.assign({}, state, {
        editTask: {
          operationInFly: false,
          payload: action.payload,
        }
      });

    case TaskActionTypes.EDIT_TASK_ERROR:
      return Object.assign({}, state, {
        editTask: {
          operationInFly: false,
          payload: action.payload,
        }
      });

    case TaskActionTypes.EDIT_TASK_OPERATION:
      return Object.assign({}, state, {
        editTask: {
          payload: action.payload,
        }
      });

    default:
      return state;
  }
}
