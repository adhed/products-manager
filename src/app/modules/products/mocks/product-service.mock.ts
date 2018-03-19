import { of } from 'rxjs/observable/of';
import { Product } from '@root/app/shared/models/product.model';

export const productServiceMock = {
  getAll: () => of('mocked'),
  addProduct: (productId: string) => of('mocked'),
  getProduct: (productId: string) => of('mocked'),
  removeProduct: (productId: string) => of('mocked'),
  updateProduct: (productId: string, product: Product) => of('mocked')
};
