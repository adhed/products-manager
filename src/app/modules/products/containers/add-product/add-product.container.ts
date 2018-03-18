import {Component} from '@angular/core';
import {ProductFormType} from '@root/app/shared/constants';

@Component({
  selector: 'my-add-product-component',
  templateUrl: './add-product.container.html',
  styleUrls: ['./add-product.container.scss']
})
export class AddProductContainerComponent {
  public get productFormType(): ProductFormType {
    return ProductFormType.ADD;
  }
}
