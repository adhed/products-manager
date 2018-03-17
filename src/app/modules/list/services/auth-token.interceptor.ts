import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {tap} from 'rxjs/operators';

import {AuthService, NavigationService} from '@root/app/shared/services';
import {Page} from '@root/app/shared/constants/pages.constant';
import {UNAUTHORIZED_CODE} from '@root/app/shared/constants';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(
    public authService: AuthService,
    private navigationService: NavigationService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request.clone({
        headers: this.getHeaders(request.headers)
      }))
      .pipe(
        tap(
          (event: HttpEvent<any>) => this.handleSuccess(event),
          (error: any) => this.handleError(error)
        )
      );
  }

  private getHeaders(headers: HttpHeaders): HttpHeaders {
    return headers.set(
      'Authorization',
      `Bearer ${this.authService.getToken()}`
    );
  }

  private handleSuccess(event: HttpEvent<any>): void {
    // We can handle responses here as well.
  }

  private handleError(error: any): void {
    const isUnauthorizedRequest = error instanceof HttpErrorResponse
      && error.status === UNAUTHORIZED_CODE;

    if (isUnauthorizedRequest) {
      this.navigationService.redirect(Page.LOGIN);
    }
  }
}
