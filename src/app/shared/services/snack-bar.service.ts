import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  public showMessage(message: string, duration: number = 3000): void {
    this.snackBar.open(message, '', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration,
    });
  }

  public showErrorMessage(message: string, duration: number = 9000): void {
    this.snackBar.open(message, 'Закрыть', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration,
    });
  }

}
