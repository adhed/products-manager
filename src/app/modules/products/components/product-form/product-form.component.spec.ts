import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NavigationService } from '@root/app/shared/services';
import { navigationServiceMock } from '@root/app/shared/mocks';
import { ProductFormComponent } from '@root/app/modules/products/components';
import { ProductService } from '@root/app/modules/products/services';
import { productServiceMock } from '@root/app/modules/products/mocks';
import { FormBuilder } from '@angular/forms';
import {ProductFormType} from '@root/app/shared/constants';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductFormComponent
      ],
      providers: [
        { provide: ProductService, useValue: productServiceMock },
        { provide: NavigationService, useValue: navigationServiceMock },
        FormBuilder
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(fixture.nativeElement).toBeDefined();
  });

  it('should emit product with productID after submit in edit mode', () => {
    const spy = spyOn(component.formSubmit, 'emit');
    component.type = ProductFormType.EDIT;

    component.onSubmitClick();

    expect(spy).toHaveBeenCalledWith(component.preparedModifiedProduct);
  });

  it('should emit product after submit in create mode', () => {
    const spy = spyOn(component.formSubmit, 'emit');
    component.type = ProductFormType.ADD;

    component.onSubmitClick();

    expect(spy).toHaveBeenCalledWith(component.preparedProduct);
  });

  it('should submit button contain "add" label in create mode', () => {
    component.type = ProductFormType.ADD;
    expect(component.submitButtonText).toBe('Add');
  });

  it('should submit button contain "save" label in edit mode', () => {
    component.type = ProductFormType.EDIT;
    expect(component.submitButtonText).toBe('Save');
  });

  it('should submit button use "save" icon in edit mode ', () => {
    component.type = ProductFormType.EDIT;
    expect(component.submitButtonIcon).toBe('save');
  });

  it('should submit button use "circle add" icon in create mode ', () => {
    component.type = ProductFormType.ADD;
    expect(component.submitButtonIcon).toBe('add_circle');
  });
});
