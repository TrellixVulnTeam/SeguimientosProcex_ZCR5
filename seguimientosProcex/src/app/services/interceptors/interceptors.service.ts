import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('access_token');
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError(this.manejarError)

    )
  }

  manejarError(error: HttpErrorResponse) {
    console.log('Sucedio un error')
    console.log('Registrado en el log file')
    console.warn(error)
    return throwError('Error personalizado')
  }


}
