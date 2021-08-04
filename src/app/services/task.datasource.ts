import { DataSource } from '@angular/cdk/collections';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Task } from '../models/task.model';

import * as fromTask from '../state/task';
import { tap } from 'rxjs/operators';

export class TaskDatasource implements DataSource<Task> {

  private taskSubject = new BehaviorSubject<Task[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$ = this.loadingSubject.asObservable();
  taskListLoading$: Subscription | null = null;
  taskList$: Subscription | null = null;

  constructor(
    private readonly store: Store,
  ) {

    this.taskListLoading$ = this.store.select(fromTask.getIsLoading)
      .pipe(tap(loading => this.loadingSubject.next(loading)))
      .subscribe();

    this.taskList$ = this.store.select(fromTask.getTasks)
      .pipe(tap(taskList => {
        this.loadingSubject.next(false);
        this.loadTaskList(taskList.nodes);
      })).subscribe();
  }

  loadTaskList(data: Task[]): void {
    this.taskSubject.next(data);
  }

  connect(): Observable<Task[]> {
    return this.taskSubject.asObservable();
  }

  disconnect(): void {
    this.taskSubject.complete();
    this.loadingSubject.complete();
  }

}
