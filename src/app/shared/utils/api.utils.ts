import { ApiPath, apiUrl } from '@root/app/shared/constants';

export function getLoginUrl(): string {
  return `${apiUrl}/${ApiPath.LOGIN}`;
}

export function getProductsUrl(): string {
  return `${apiUrl}/${ApiPath.PRODUCTS}`;
}

export function getProductUrl(id: string): string {
  return `${apiUrl}/${ApiPath.PRODUCTS}/${id}`;
}
