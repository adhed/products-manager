import {Inject, Injectable} from '@angular/core';

import { WindowToken } from '@root/app/shared/utils';
import { getAuthTokenKey } from '@root/app/shared/utils/auth.utils';


@Injectable()
export class AuthService {
  constructor(@Inject(WindowToken) private window: Window) {}

  private get localStorage(): Storage {
    return this.window.localStorage;
  }

  public isUserAuthenticated(): boolean {
    const token: string | null = this.localStorage.getItem(
      getAuthTokenKey()
    );
    return !!token;
  }
}
