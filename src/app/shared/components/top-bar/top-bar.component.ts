import { ChangeDetectionStrategy, Component } from '@angular/core';
import {AuthService, NavigationService} from '@root/app/shared/services';
import {Page} from '@root/app/shared/constants/pages.constant';

@Component({
  selector: 'my-top-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  public get isLoggedIn(): boolean {
    return this.authService.isUserAuthenticated();
  }

  public onLogoutClick(): void {
    this.authService.logout();
  }

  public onAppNameClick(): void {
    this.navigationService.redirect(Page.PRODUCTS);
  }
}
