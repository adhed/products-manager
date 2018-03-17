import {Component, HostBinding, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {LoginData, LoginResponse} from '@root/app/shared/models';
import {Page} from '@root/app/shared/constants/pages.constant';
import {AuthService, NavigationService} from '@root/app/shared/services';
import {Subject} from 'rxjs/Subject';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'my-login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainerComponent implements OnDestroy {
  @HostBinding('attr.class') public hostClass: string = 'login';

  public error: string = '';
  public requestInProgress: boolean = false;
  public returnUrl: string = '';
  private destroy$: Subject<void> = new Subject();

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  public get errorMessage(): string {
    return this.error ? `${this.error}. Please try again.` : '';
  }

  public onFormSubmit(data: LoginData): void {
    this.requestInProgress = true;
    this.clearErrorMessage();

    this.authService.login$(data)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        (response: LoginResponse) => {
          this.clearForm();
          this.authService.saveToken(response);
          this.navigationService.redirect(Page.LIST);
          },
        (error: HttpErrorResponse) => this.handleError(error)
      );
  }

  public ngOnDestroy(): void {
    this.destroy$.complete();
  }

  private handleError(response: HttpErrorResponse): void {
    this.requestInProgress = false;
    this.error = response.error;
  }

  private clearForm(): void {
    this.clearErrorMessage();
    this.requestInProgress = false;
  }

  private clearErrorMessage(): void {
    this.error = '';
  }
}
