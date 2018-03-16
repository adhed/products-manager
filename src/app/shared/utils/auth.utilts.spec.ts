import { getAuthTokenKey } from '@root/app/shared/utils/auth.utils';

describe('Auth utils', () => {
  it('should give proper local storage auth token key', () => {
    const expected: string = 'auth/token';
    expect(getAuthTokenKey()).toEqual(expected);
  });
});
