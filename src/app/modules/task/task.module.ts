import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import * as fromTask from '../../state/task';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('tasks', fromTask.taskReducer),
  ]
})
export class TaskModule { }
