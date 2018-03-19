import { HttpResponse } from '@angular/common/http/src/response';

import { isSuccessRequest } from '@root/app/modules/products/utils/product-request.utils';
import { NO_CONTENT_CODE, OK_CODE } from '@root/app/shared/constants';

const mockedResponse: HttpResponse<any> = {
  status: OK_CODE,
  headers: null,
  statusText: '',
  url: null,
  ok: true,
  body: null,
  type: 4,
  clone: () => this
};

describe('Product request utils', () => {
  it('should say that request is success when status is OK', () => {
    const response = {
      ...mockedResponse,
      status: OK_CODE,
      clone: () => this
    };
    expect(isSuccessRequest(response)).toBe(true);
  });

  it('should say that request is success when status is no content', () => {
    const response = {
      ...mockedResponse,
      status: NO_CONTENT_CODE,
      clone: () => this
    };
    expect(isSuccessRequest(response)).toBe(true);
  });

  it('should say that request is not success when status is different', () => {
    const response = {
      ...mockedResponse,
      status: 404,
      clone: () => this
    };
    expect(isSuccessRequest(response)).toBe(false);
  });
});
