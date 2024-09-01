import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpErrorInterceptor } from './ErrorHandling/http-error/http-error.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from './Modules/shared/shared.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      HttpClientModule,  
      SharedModule   
     
    ), 
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
    
    // Add other providers as needed
  ]
};