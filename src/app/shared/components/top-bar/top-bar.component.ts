import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AuthService, NavigationService } from '@root/app/shared/services';
import { Page } from '@root/app/shared/constants/pages.constant';

@Component({
  selector: 'my-top-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public isAuthenticated$: Subject<boolean>;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  public ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  public onLogoutClick(): void {
    this.authService.logout();
  }

  public onAppNameClick(): void {
    this.navigationService.redirect(Page.PRODUCTS);
  }
}
