import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainerComponent {
  @HostBinding('attr.class') public hostClass: string = 'login';
}
