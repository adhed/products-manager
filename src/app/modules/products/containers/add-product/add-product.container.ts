import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '@root/app/shared/models/product.model';
import {Page} from '@root/app/shared/constants/pages.constant';
import {NavigationService} from '@root/app/shared/services';
import {ProductService} from '@root/app/modules/products/services';
import {HttpErrorResponse, HttpHeaderResponse} from '@angular/common/http';

@Component({
  selector: 'my-add-product-component',
  templateUrl: './add-product.container.html',
  styleUrls: ['./add-product.container.scss']
})
export class AddProductContainerComponent {

  public product: Product = {
    productID: '',
    name: '',
    description: '',
    price: 0
  };

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private navigationService: NavigationService
  ) {}

  public productForm: FormGroup =  this.formBuilder.group({
    description: [''],
    name: ['', Validators.required],
    price: [0, Validators.required]
  });

  public onAddClick(): void {
    this.productService.addProduct(this.getProduct())
      .subscribe(
        (response: HttpHeaderResponse) => {
          console.log('res', response);
          this.navigationService.redirect(Page.PRODUCTS);
        },
        (error: HttpErrorResponse) => this.handleError(error)
      );
  }

  public onResetClick(): void {
    this.rebuildForm();
  }

  public onBackClick(): void {
    this.navigationService.redirect(Page.PRODUCTS);
  }

  private rebuildForm(): void {
    this.productForm.reset({
      name: this.product.name,
      description: this.product.description,
      price: this.product.price
    });
  }

  private getProduct(): Product {
    return {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      price: this.productForm.value.price
    };
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error:', error);
  }
}
