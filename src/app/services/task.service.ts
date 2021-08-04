import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Operation, OperationStatus } from 'src/app/shared/constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { SnackBarService } from '../shared/services/snack-bar.service';
import { EditTaskPayload, NewTaskPayload, Task, TaskData } from '../models/task.model';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import config from '../config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private currentTask: Task | null = null;

  private readonly taskApi: string = `${environment.baseUrl}`;

  constructor(
    private http: HttpClient,
    private snackBar: SnackBarService,
    private configService: ConfigService,
    private router: Router,
  ) { }

  public getAll(options?: GetAllTasksOptions): Observable<GetAllTasksSuccess | GetAllTasksError> {

    let params: HttpParams | null;

    if (options) {

      params = new HttpParams()
        .set('developer', config.developer)
        .set('sort_field', options?.sortField ?? '')
        .set('sort_direction', options?.sortDirection ?? 'asc')
        .set('page', options?.page ?? '1');

    } else {
      params = this.configService.getConfig().params;
    }

    return this.http.get<GetAllTasksSuccess | GetAllTasksError>(`${this.taskApi}/`, { params });
  }

  public create(data: NewTaskPayload): Observable<CreateTaskSuccessPayload | CreateTaskErrorPayload> {
    const formData = new FormData();
    formData.set('username', data.username);
    formData.set('email', data.email);
    formData.set('text', data.text);
    return this.http.post<Operation>(`${this.taskApi}/create`, formData, this.configService.getConfig())
      .pipe(
        map(payload => {
          switch (payload.status) {
            case OperationStatus.Error:
              this.showErrorMessage('Не удалось создать задачу');
              return payload as CreateTaskErrorPayload;
            case OperationStatus.Ok:
              this.showMessage('Задача создана');
              return payload as CreateTaskSuccessPayload;
          }
        })
      );
  }

  public edit(data: EditTaskPayload): Observable<EditTaskSuccessPayload | EditTaskErrorPayload> {
    const formData = new FormData();
    formData.set('text', data.data.text);
    formData.set('status', data.data.status.toString());
    formData.set('token', data.token);

    const params = new HttpParams()
      .set('developer', config.developer)
      .set('token', data.token);

    return this.http.post<EditTaskSuccessPayload | EditTaskErrorPayload>(`${this.taskApi}/edit/${data.id}`, formData, { params })
      .pipe(
        map(payload => {
          switch (payload.status) {
            case OperationStatus.Error:
              if (payload?.message?.token) {
                this.router.navigate(['login']);
              }
              this.showErrorMessage('Не удалось сохранить изменения');
              return payload;
            case OperationStatus.Ok:
              this.showMessage('Изменения сохранены')
              return payload;
          }
        })
      );
  }

  public getCurrentTask(): Task | null {
    return this.currentTask;
  }

  private showMessage(message: string): void {
    this.snackBar.showMessage(message);
  }

  private showErrorMessage(message: string): void {
    this.snackBar.showErrorMessage(message);
  }

}

export type GetAllTasksResponse = {
  totalCount: number,
  nodes: Task[],
};

export type GetAllTasksError = {
  status: OperationStatus.Error;
  message: string;
};

export type GetAllTasksSuccess = {
  status: OperationStatus.Ok;
  message: {
    tasks: TaskData[];
    total_task_count: number;
  }
};

export type CreateTaskSuccessPayload = {
  status: OperationStatus.Ok;
  message: TaskData;
};

export type CreateTaskErrorPayload = {
  status: OperationStatus.Error;
  message: {
    username?: string;
    email?: string;
    text?: string;
    status?: string;
  }
};

export type EditTaskSuccessPayload = {
  status: OperationStatus.Ok;
  message: TaskData;
};

export type EditTaskErrorPayload = {
  status: OperationStatus.Error;
  message: {
    text?: string;
    status?: string;
    token?: string;
  }
};

export type sortField = 'id' | 'username' | 'email' | 'status';

export type sortDirection = 'asc' | 'desc';

export type GetAllTasksOptions = {
  sortField?: sortField;
  sortDirection?: sortDirection;
  page?: string;
};
