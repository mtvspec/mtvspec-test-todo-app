import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NewTaskPayload } from 'src/app/models/task.model';

import * as fromTask from '../../state/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit, OnDestroy {
  create$: Subscription | null = null;
  formModel: { [key in keyof NewTaskPayload]: FormControl } = {
    username: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    text: new FormControl(null, [
      Validators.required,
    ]),
  };

  form: FormGroup = new FormGroup(this.formModel);

  operationInFly$: Observable<boolean | null> | null = null;

  constructor(
    private readonly router: Router,
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
    this.operationInFly$ = this.store.select(fromTask.createTaskOperationInFly);
    this.create$ = this.store.select(fromTask.createTaskOperationPayload)
      .pipe(tap(async payload => {
        if (payload) {
          this.store.dispatch(new fromTask.CreateTaskOperation(false));
          await this.router.navigate(['../']);
        }
      }))
      .subscribe();
  }

  create(): void {
    if (this.form.valid) {
      this.store.dispatch(new fromTask.CreateTask(this.form.value));
    }
  }

  ngOnDestroy(): void {
    if (this.create$) {
      this.create$.unsubscribe();
    }
  }

}
