import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (sessionStorage.accessToken) {
      const accessToken = JSON.parse(sessionStorage.accessToken);

      // Clone the request and attach the token
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken.token}`
        }
      });

      return next.handle(authReq).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.error.name === 'TokenExpiredError') {
            const url = environment.properties.ssdURL + 'refresh-token';

            // Refresh Token call and retry original request
            return this.http.post(url, { refreshToken: accessToken.refreshToken }).pipe(
              switchMap((res: any) => {
                // Update token in session storage
                accessToken.token = res.token;
                sessionStorage.setItem('accessToken', JSON.stringify(accessToken));

                // Clone the original request with the new token
                const newAuthReq = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${accessToken.token}`
                  }
                });

                // Retry the original request with the new token
                return next.handle(newAuthReq);
              }),
              catchError(refreshError => {
                // Handle error from refresh token attempt
                console.error('Token refresh failed:', refreshError);
                return throwError(refreshError); // Pass the error to the caller
              })
            );
          }
          return throwError(error); // Re-throw the error if not related to token expiration
        })
      );
    }

    return next.handle(request);
  }
}
