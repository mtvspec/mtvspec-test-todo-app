import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { OperationStatus } from 'src/app/shared/constants';
import { SnackBarService } from '../shared/services/snack-bar.service';
import { ConfigService } from './config.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromAuth from '../state/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  private readonly taskApi: string = `${environment.baseUrl}`;

  constructor(
    private http: HttpClient,
    private snackBar: SnackBarService,
    private readonly configService: ConfigService,
    private readonly router: Router,
    private readonly store: Store,
  ) {
    this.getToken();
  }

  public login(data: { username: string; password: string; }): Observable<LoginOperation> {

    const formData = new FormData();
    formData.set('username', data.username);
    formData.set('password', data.password);

    return this.http.post<LoginOperation>(`${this.taskApi}/login`, formData, this.configService.getConfig())
      .pipe(
        map(response => {
          switch (response.status) {
            case OperationStatus.Error:
              if (response.message?.username) {
                this.showErrorMessage(response.message.username);
              }
              if (response.message?.password) {
                this.showErrorMessage(response.message.password);
              }
              return response;
            case OperationStatus.Ok:
              if (response.message?.token) {
                this.setToken(response.message.token);
                this.store.dispatch(new fromAuth.IsAuthenticated({ isAuthenticated: true, token: response.message.token }));
              }
              this.router.navigate(['']);
              return response;
          }
        })
      );
  }

  public getToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.store.dispatch(new fromAuth.IsAuthenticated({ isAuthenticated: true, token }));
      return this.token;
    } else {
      this.store.dispatch(new fromAuth.IsAuthenticated({ isAuthenticated: false, token: null }));
      return null;
    }
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public logout(): void {
    this.store.dispatch(new fromAuth.IsAuthenticated({ isAuthenticated: false, token: null }));
    localStorage.clear();
    this.token = null;
    this.router.navigate(['']);
  }

  private showErrorMessage(message: string): void {
    this.snackBar.showErrorMessage(message);
  }

}

type LoginOperation = {
  status: OperationStatus
  message?: {
    token: string;
    username: string;
    password: string;
  }
};
