import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task, TaskStatus } from 'src/app/models/task.model';

import { TaskState } from 'src/app/state/task';


import * as fromAuth from '../../state/auth';

import * as fromTask from '../../state/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
  operationInFly$: Observable<boolean | null> | null = null;
  token$: Subscription | null = null;
  task$: Subscription | null = null;
  task: Task | null = null;
  formModel: { [key in keyof { text: string; status: TaskStatus }]: FormControl } = {
    text: new FormControl(null, [
      Validators.required
    ]),
    status: new FormControl(null, [
      Validators.required,
    ]),
  };
  form: FormGroup = new FormGroup(this.formModel);
  completed: FormControl = new FormControl();
  edited: FormControl = new FormControl();
  edit$: Subscription | null = null;
  constructor(
    private store: Store<TaskState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.operationInFly$ = this.store.select(fromTask.editTaskOperationInFly);
    /*
    Так как API для получения задачи по ее id нет получаю задачу через сервис
    (но если пользователь отправит ссылку на задачу другому пользователю задача не откроется)
    */
    this.task$ = this.store.select(fromTask.currentTask)
      .pipe(
        tap(async task => {
          if (task) {
            this.task = task;
            this.form.get('text')?.setValue(task?.text);
            this.form.get('status')?.setValue(task?.status);
            this.completed.setValue(task.completed);
            this.edited.disable()
            this.edited.setValue(task.edited);
          } else {
            await this.router.navigate(['']);
          }
        })
      )
      .subscribe();


    this.edit$ = this.store.select(fromTask.editTaskOperationPayload)
      .pipe(
        tap(async res => {
          if (res) {
            this.store.dispatch(new fromTask.SetCurrentTask(null));
            this.store.dispatch(new fromTask.EditTaskOperation(false));
            await this.router.navigate(['../']);
          }
        }
        ))
      .subscribe();

  }

  save(): void {

    this.token$ = this.store.select(fromAuth.getToken)
      .pipe(tap(token => {
        if (token && this.form.valid && this.task) {
          /*
            Определение статуса задачи исходя из состояния задачи
            */

          let status: TaskStatus = this.task.status;

          const completed = this.completed.value;
          const edited = this.task.text !== this.form.get('text')?.value

          if (!completed && !edited) {
            status = TaskStatus.NotCompleted;
          } else if (completed && !edited) {
            status = TaskStatus.Completed;
          } else if (completed && edited) {
            status = TaskStatus.CompletedAndEditedByAdmin;
          } else if (!completed && edited) {
            status = TaskStatus.NotCompletedAndEditedByAdmin;
          }

          this.store.dispatch(new fromTask.EditTask({
            id: this.task.id,
            data: {
              text: this.form.value?.text,
              status,
            },
            token,
          }));
        }
      }))
      .subscribe();


  }

  ngOnDestroy(): void {
    if (this.edit$) {
      this.edit$.unsubscribe();
    }
  }

}
