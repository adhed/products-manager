import {HttpResponse} from '@angular/common/http';
import {RequestResult, RequestResultType} from '@root/app/shared/models/request-result.model';
import {NO_CONTENT_CODE, OK_CODE} from '@root/app/shared/constants';


export function getRequestResult(
  response: HttpResponse<any>,
  requestType: string
): RequestResult {
  return isSuccessRequest(response) ?
    {
      message: `Product has been successfully ${requestType}`,
      type: RequestResultType.SUCCESS

    } : {
      message: 'There was a problem with your request, please try again.',
      type: RequestResultType.SUCCESS
  };
}

export function isSuccessRequest(response: HttpResponse<any>): boolean {
  return response
    && (response.status === OK_CODE || response.status === NO_CONTENT_CODE);
}
