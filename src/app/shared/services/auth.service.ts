import { Inject, Injectable } from '@angular/core';

import { getLoginParams, getLoginUrl, WindowToken } from '@root/app/shared/utils';
import { getAuthTokenKey } from '@root/app/shared/utils/auth.utils';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '@root/app/shared/models';
import { Observable } from 'rxjs/Observable';
import { NavigationService } from '@root/app/shared/services/navigation.service';
import { LoginResponse } from '@root/app/shared/models/login.model';
import {Page} from '@root/app/shared/constants/pages.constant';


@Injectable()
export class AuthService {
  constructor(
    @Inject(WindowToken) private window: Window,
    private navigationService: NavigationService,
    private http: HttpClient
  ) {}

  private get localStorage(): Storage {
    return this.window.localStorage;
  }

  public login$(data: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      getLoginUrl(),
      getLoginParams(data)
    );
  }

  public logout(): void {
    this.localStorage.removeItem(getAuthTokenKey());
    this.navigationService.redirect(Page.LOGIN);
  }

  public isUserAuthenticated(): boolean {
    return !!this.getToken();
  }

  public saveToken(data: LoginResponse): void {
    this.localStorage.setItem(
      getAuthTokenKey(),
      data.access_token
    );
  }

  public getToken(): string | null {
    return this.localStorage.getItem(
      getAuthTokenKey()
    );
  }
}
