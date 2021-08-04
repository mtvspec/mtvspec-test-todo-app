import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

import { Task } from 'src/app/models/task.model';
import { Store } from '@ngrx/store';

import * as fromTask from '../../state/task';

import {
  GetAllTasksOptions,
  GetAllTasksResponse,
  sortDirection,
  sortField,
} from 'src/app/services/task.service';
import { TaskDatasource } from 'src/app/services/task.datasource';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  displayedColumns = [
    'username',
    'email',
    'text',
    'completed',
    'edited',
  ];

  taskList$: Observable<GetAllTasksResponse> | null = null;

  dataSource: TaskDatasource | null = null;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {

    this.dataSource = new TaskDatasource(this.store);

    this.taskList$ = this.store.select(fromTask.getTasks);

    this.fetchTaskList();

  }

  onSortChange(event: Sort): void {
    this.fetchTaskList({
      sortField: event.active as sortField,
      sortDirection: event.direction as sortDirection,
    });
  }

  onPageEvent(pageEvent: PageEvent): void {
    this.fetchTaskList({
      page: (pageEvent.pageIndex + 1).toString()
    });
  }

  onSelectTask(task: Task): void {
    this.store.dispatch(new fromTask.SetCurrentTask(task));
  }

  private fetchTaskList(options: GetAllTasksOptions = {
    sortField: 'id',
    sortDirection: 'desc',
  }): void {
    this.store.dispatch(new fromTask.GetAllTasks(options));
  }

}
