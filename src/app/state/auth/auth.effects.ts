import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';

import * as fromAuth from '../auth';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {OperationStatus} from '../../shared/constants';
import {SnackBarService} from '../../shared/services/snack-bar.service';
import {of} from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuth.AuthActionTypes.Login),
      map((action: fromAuth.Login) => action.payload),
      mergeMap(data => this.authService.login(data)
        .pipe(
          map(payload => {
            switch (payload.status) {
              case OperationStatus.Error:
                if (payload.message?.username) {
                  this.snackBar.showErrorMessage(payload.message.username);
                }
                if (payload.message?.password) {
                  this.snackBar.showErrorMessage(payload.message.password);
                }
                if (payload.message?.token) {
                  this.snackBar.showErrorMessage(payload.message.token);
                }
                return (new fromAuth.LoginError(payload));
              case OperationStatus.Ok:
                return (new fromAuth.LoginSuccess(payload));
            }
          }),
          catchError((error) => of(new fromAuth.LoginError(error)))
        )
      ),
    )
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private snackBar: SnackBarService,
  ) {
  }
}
