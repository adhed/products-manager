import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LoginContainerComponent } from './login.container';
import { AuthService, NavigationService } from '@root/app/shared/services';
import { authServiceMock, navigationServiceMock } from '@root/app/shared/mocks';
import { Page } from '@root/app/shared/constants';
import { LoginData } from '@root/app/shared/models';

const mockedLoginData: LoginData = {
  login: 'some-login',
  password: 'some-password'
};

describe('LoginContainerComponent', () => {
  let component: LoginContainerComponent;
  let fixture: ComponentFixture<LoginContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginContainerComponent
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: NavigationService, useValue: navigationServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(fixture.nativeElement).toBeDefined();
  });

  it('should clear form after login', () => {
    const spy = spyOn(component, 'clearForm');

    component.onFormSubmit({...mockedLoginData});

    expect(spy).toHaveBeenCalled();
  });

  it('should redirect to products list after login', () => {
    const spy = spyOn(component.navigationService, 'redirect');

    component.onFormSubmit({...mockedLoginData});

    expect(spy).toHaveBeenCalledWith(Page.PRODUCTS);
  });

  it('should clear error message after login form submit', () => {
    component.error = 'some error';

    component.onFormSubmit({...mockedLoginData});

    expect(component.error).toBe('');
  });
});
