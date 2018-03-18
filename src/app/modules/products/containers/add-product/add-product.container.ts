import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '@root/app/shared/models/product.model';

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

  constructor(private formBuilder: FormBuilder) {}

  public productForm: FormGroup =  this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['']
  });

  public onAddClick(): void {

  }

  public onResetClick(): void {
    this.rebuildForm();
  }

  public onBackClick(): void {

  }

  private rebuildForm(): void {
    this.productForm.reset({
      name: this.product.name,
      description: this.product.description,
      price: this.product.price
    });
  }
}
