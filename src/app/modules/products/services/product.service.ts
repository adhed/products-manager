import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { getProductsUrl, getProductUrl } from '@root/app/shared/utils';
import { Product } from '@root/app/shared/models/product.model';


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(getProductsUrl());
  }

  public addProduct(product: Product): Observable<any> {
    return this.http.post(getProductsUrl(), product);
  }

  public getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(getProductUrl(id));
  }

  public removeProduct(id: string): Observable<any> {
    return this.http.delete(getProductUrl(id));
  }
}
