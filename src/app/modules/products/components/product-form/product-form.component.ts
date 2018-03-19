import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Product} from '@root/app/shared/models/product.model';
import {Page} from '@root/app/shared/constants/pages.constant';
import {NavigationService} from '@root/app/shared/services';
import {ProductService} from '@root/app/modules/products/services';
import {ProductFormType} from '@root/app/shared/constants/product-form.constant';

@Component({
  selector: 'my-product-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('nameInput') public nameInput: ElementRef;
  @Input() public type: ProductFormType;
  @Input() public set product(product: Product) {
    this._product = product;

    if (product) {
      this.rebuildForm();
    }
  }

  @Output() public formSubmit: EventEmitter<Product> = new EventEmitter<Product>();

  public _product: Product;
  public productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private navigationService: NavigationService
  ) {}

  public get isEditForm(): boolean {
    return this.type === ProductFormType.EDIT;
  }

  public get submitButtonText(): string {
    return this.isEditForm ? 'Save' : 'Add';
  }

  public get submitButtonIcon(): string {
    return this.isEditForm ? 'save' : 'add_circle';
  }

  public get preparedProduct(): Product {
    return {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      price: this.productForm.value.price
    };
  }

  public get preparedModifiedProduct(): Product {
    return {
      ...this.preparedProduct,
      productID: this._product.productID
    };
  }

  public ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description: [''],
      name: ['', Validators.required],
      price: [0, Validators.required]
    });
    this._product = {
      productID: '',
      name: '',
      description: '',
      price: 0
    };
  }

  public onSubmitClick(): void {
    this.formSubmit.emit(
      this.isEditForm ? this.preparedModifiedProduct : this.preparedProduct
    );
  }

  public onResetClick(): void {
    this.rebuildForm();
    this.nameInput.nativeElement.focus();
  }

  public onBackClick(): void {
    this.navigationService.redirect(Page.PRODUCTS);
  }

  private rebuildForm(): void {
    this.productForm.reset({
      name: this._product.name,
      description: this._product.description,
      price: this._product.price
    });
  }
}
