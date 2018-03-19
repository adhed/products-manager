import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map, tap } from 'rxjs/operators';

import { getProductsUrl, getProductUrl } from '@root/app/shared/utils';
import { Product } from '@root/app/shared/models/product.model';
import { RequestResult } from '@root/app/shared/models/request-result.model';
import { getRequestResult } from '@root/app/modules/products/utils/product-request.utils';


@Injectable()
export class ProductService {
  public requestResult$: Subject<RequestResult> = new Subject();

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(getProductsUrl());
  }

  public addProduct(product: Product): Observable<any> {
    return this.http.post(getProductsUrl(), product, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => getRequestResult(response, 'added')),
        tap((result: RequestResult) => this.requestResult$.next(result))
      );
  }

  public getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(getProductUrl(id));
  }

  public removeProduct(id: string): Observable<any> {
    return this.http.delete(getProductUrl(id), { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => getRequestResult(response, 'removed')),
        tap((result: RequestResult) => this.requestResult$.next(result))
      );
  }

  public updateProduct(id: string, product: Product): Observable<any> {
    return this.http.put(getProductUrl(id), product, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => getRequestResult(response, 'updated')),
        tap((result: RequestResult) => this.requestResult$.next(result))
      );
  }
}
