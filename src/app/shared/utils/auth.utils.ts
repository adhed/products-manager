import {HttpParams} from '@angular/common/http';

import { AUTH_NAMESPACE, TOKEN_KEY } from '@root/app/shared/constants';
import { ApiParam } from '@root/app/shared/constants/api.constant';
import { LoginData } from '@root/app/shared/models';

export function getAuthTokenKey(): string {
  return `${AUTH_NAMESPACE}${TOKEN_KEY}`;
}

export function getLoginParams(data: LoginData): HttpParams {
  return new HttpParams({
    fromObject: {
      [ApiParam.USERNAME]: data.login,
      [ApiParam.PASSWORD]: data.password
    }
  });
}
