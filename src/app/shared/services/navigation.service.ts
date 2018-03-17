import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Page} from '@root/app/shared/constants/pages.constant';

@Injectable()
export class NavigationService {
  constructor(private router: Router) {}

  public redirect(page: Page): void {
    this.router.navigate([page])
      .catch((error: Error) => console.error('Router error:', error));
  }
}
