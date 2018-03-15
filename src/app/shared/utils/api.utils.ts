import { ApiRoute, apiUrl } from '@root/app/shared/constants';

export function getLoginUrl(): string {
  return `${apiUrl}/${ApiRoute.LOGIN}`;
}

export function getProductsUrl(): string {
  return `${apiUrl}/${ApiRoute.PRODUCTS}`;
}

export function getProductUrl(id: string): string {
  return `${apiUrl}/${ApiRoute.PRODUCTS}/${id}`;
}
