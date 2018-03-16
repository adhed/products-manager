import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @HostBinding('attr.class') public hostClass: string = 'login-form';

  public handleSubmit(): void {
    console.log('Form submitted!');
  }
}
