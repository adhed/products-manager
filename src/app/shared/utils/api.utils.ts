import { ApiPath, API_URL } from '@root/app/shared/constants';

export function getLoginUrl(): string {
  return `${API_URL}/${ApiPath.LOGIN}`;
}

export function getProductsUrl(): string {
  return `${API_URL}/${ApiPath.PRODUCTS}`;
}

export function getProductUrl(id: string): string {
  return `${API_URL}/${ApiPath.PRODUCTS}/${id}`;
}
