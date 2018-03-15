import { getLoginUrl, getProductsUrl, getProductUrl } from '@root/app/shared/utils/api.utils';

describe('API utils', () => {
  it('should create proper login URL', () => {
    const expectedUrl: string = 'http://recruits.siennsoft.com/api/Jwt';
    expect(getLoginUrl()).toEqual(expectedUrl);
  });

  it('should create proper products URL', () => {
    const expectedUrl: string = 'http://recruits.siennsoft.com/api/Products';
    expect(getProductsUrl()).toEqual(expectedUrl);
  });

  it('should create proper product URL', () => {
    const productId: string = '5';
    const expectedUrl: string = `http://recruits.siennsoft.com/api/Products/${productId}`;
    expect(getProductUrl(productId)).toEqual(expectedUrl);
  });
});
