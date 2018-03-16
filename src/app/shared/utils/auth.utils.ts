import { AUTH_NAMESPACE, TOKEN_KEY } from '@root/app/shared/constants';

export function getAuthTokenKey(): string {
  return `${AUTH_NAMESPACE}${TOKEN_KEY}`;
}
