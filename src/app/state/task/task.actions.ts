import { Action } from '@ngrx/store';
import { EditTaskPayload, NewTaskPayload, Task } from 'src/app/models/task.model';
import { CreateTaskErrorPayload, CreateTaskSuccessPayload, EditTaskErrorPayload, EditTaskSuccessPayload, GetAllTasksResponse } from 'src/app/services/task.service';

export enum TaskActionTypes {

  GET_ALL_TASKS = '[Task] Get All Tasks',
  GET_ALL_TASKS_SUCCESS = '[Task] Get All Tasks Success',
  GET_ALL_TASKS_ERROR = '[Task] Get All Tasks Error',

  CREATE_TASK = '[Task] Create Task',
  CREATE_TASK_SUCCESS = '[Task] Create Task Success',
  CREATE_TASK_ERROR = '[Task] Create Task Error',
  CREATE_TASK_OPERATION = '[Task] Create Task Operation',

  SET_CURRENT_TASK = '[List] Set Current Task',

  EDIT_TASK = '[Task] Edit Task',
  EDIT_TASK_SUCCESS = '[Task] Edit Task Success',
  EDIT_TASK_ERROR = '[Task] Edit Task Error',
  EDIT_TASK_OPERATION = '[Task] Edit Task Operation',

}

export class GetAllTasks implements Action {
  readonly type = TaskActionTypes.GET_ALL_TASKS;
  constructor(public payload?: any) { }
}

export class GetAllTasksSuccess implements Action {
  readonly type = TaskActionTypes.GET_ALL_TASKS_SUCCESS;
  constructor(public payload: GetAllTasksResponse) { }
}

export class GetAllTasksError implements Action {
  readonly type = TaskActionTypes.GET_ALL_TASKS_ERROR;
  constructor(public payload: { message: string }) { }
}

export class CreateTask implements Action {
  readonly type = TaskActionTypes.CREATE_TASK;
  constructor(public payload: NewTaskPayload) { }
}

export class CreateTaskSuccess implements Action {
  readonly type = TaskActionTypes.CREATE_TASK_SUCCESS;
  constructor(public payload: CreateTaskSuccessPayload) { }
}

export class CreateTaskError implements Action {
  readonly type = TaskActionTypes.CREATE_TASK_ERROR;
  constructor(public payload: CreateTaskErrorPayload) { }
}

export class CreateTaskOperation implements Action {
  readonly type = TaskActionTypes.CREATE_TASK_OPERATION;
  constructor(public payload: boolean) { }
}

export class SetCurrentTask implements Action {
  readonly type = TaskActionTypes.SET_CURRENT_TASK;
  constructor(public payload: Task | null) { }
}

export class EditTask implements Action {
  readonly type = TaskActionTypes.EDIT_TASK;
  constructor(public payload: EditTaskPayload) { }
}

export class EditTaskSuccess implements Action {
  readonly type = TaskActionTypes.EDIT_TASK_SUCCESS;
  constructor(public payload: EditTaskSuccessPayload) { }
}

export class EditTaskError implements Action {
  readonly type = TaskActionTypes.EDIT_TASK_ERROR;
  constructor(public payload: EditTaskErrorPayload) { }
}

export class EditTaskOperation implements Action {
  readonly type = TaskActionTypes.EDIT_TASK_OPERATION;
  constructor(public payload: boolean) { }
}

export type TaskActions =
  | GetAllTasks
  | GetAllTasksSuccess
  | GetAllTasksError
  | CreateTask
  | CreateTaskSuccess
  | CreateTaskError
  | CreateTaskOperation
  | SetCurrentTask
  | EditTask
  | EditTaskSuccess
  | EditTaskError
  | EditTaskOperation;
