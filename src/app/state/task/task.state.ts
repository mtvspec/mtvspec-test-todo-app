import { Task } from 'src/app/models/task.model';
import { GetAllTasksResponse } from 'src/app/services/task.service';

export interface TaskState {
  tasks: GetAllTasksResponse;
  isLoading: boolean;
  error: any;
  createTask: {
    operationInFly: boolean | null;
    payload: boolean | null;
  };
  currentTask: Task | null;
  editTask: {
    operationInFly: boolean | null;
    payload: boolean | null;
  };
}

export const taskInitialState: TaskState = {
  tasks: {
    totalCount: 0,
    nodes: [],
  },
  isLoading: false,
  error: null,
  createTask: {
    operationInFly: null,
    payload: null,
  },
  currentTask: null,
  editTask: {
    operationInFly: null,
    payload: null,
  }
};
