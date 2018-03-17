import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Output} from '@angular/core';
import {LoginData} from '@root/app/shared/models';

@Component({
  selector: 'my-login-form',
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @HostBinding('attr.class') public hostClass: string = 'login-form';
  @Output() public formSubmit: EventEmitter<LoginData> = new EventEmitter<LoginData>();

  public hidePassword: boolean = true;
  public model: LoginData = {
    login: '',
    password: ''
  };

  public onSubmit(): void {
    this.formSubmit.emit(this.model);
  }

  public onPasswordIconClick(): void {
    this.hidePassword = !this.hidePassword;
  }
}
