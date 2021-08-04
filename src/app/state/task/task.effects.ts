import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Task } from 'src/app/models/task.model';
import { OperationStatus } from 'src/app/shared/constants';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { TaskService } from '../../services/task.service';

import * as fromTask from '../task';

@Injectable()
export class TaskEffects {

  loadAllTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTask.TaskActionTypes.GET_ALL_TASKS),
      map((action: fromTask.GetAllTasks) => action?.payload),
      mergeMap(data => this.taskService.getAll(data)
        .pipe(
          map(payload => {
            switch (payload.status) {
              case OperationStatus.Error:
                this.snackBar.showErrorMessage(payload.message);
                return (new fromTask.GetAllTasksError({ message: payload.message }));

              case OperationStatus.Ok:
                return (new fromTask.GetAllTasksSuccess({
                  totalCount: payload.message.total_task_count,
                  nodes: payload.message.tasks.map(task => new Task(task)),
                }));
            }
          }),
          catchError((error) => of(new fromTask.GetAllTasksError({ message: error.message })))
        )
      )
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTask.TaskActionTypes.CREATE_TASK),
      map((action: fromTask.CreateTask) => action.payload),
      mergeMap(data => this.taskService.create(data)
        .pipe(
          map(payload => {
            switch (payload.status) {
              case OperationStatus.Ok:
                return (new fromTask.CreateTaskSuccess(payload));
              case OperationStatus.Error:
                return (new fromTask.CreateTaskError(payload));
            }
          }),
          catchError(() => of({ type: '[Task API] Create Task Error' })),
        ))
    )
  );

  editTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTask.TaskActionTypes.EDIT_TASK),
      map((action: fromTask.EditTask) => action.payload),
      mergeMap(data => this.taskService.edit(data)
        .pipe(
          map(payload => {
            switch (payload.status) {
              case OperationStatus.Ok:
                return (new fromTask.EditTaskSuccess(payload));
              case OperationStatus.Error:
                return (new fromTask.EditTaskError(payload));
            }
          }),
          catchError(() => of({ type: '[Task API] Edit Task Error' })),
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
    private readonly snackBar: SnackBarService,
  ) { }

}
