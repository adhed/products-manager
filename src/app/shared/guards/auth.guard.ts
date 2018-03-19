import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '../services';
import { NavigationService } from '@root/app/shared/services';
import { Page } from '@root/app/shared/constants/pages.constant';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) { }

  public canActivate(): boolean {
    if (this.authService.isUserAuthenticated()) {
      return true;
    }
    this.navigationService.redirect(Page.LOGIN);
    return false;
  }
}
