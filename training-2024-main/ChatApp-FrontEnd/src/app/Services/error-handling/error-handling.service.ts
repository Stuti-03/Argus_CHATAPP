// src/app/services/error-handling.service.ts
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  constructor(private snackBar: MatSnackBar) {}

  handleError(error: HttpErrorResponse): void {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    const config: MatSnackBarConfig = {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top', // 'top' or 'bottom' are the available options for vertical positioning
    };

    this.snackBar.open(errorMessage, 'Close', config);
  }
}
