import { Injectable } from '@angular/core';
import {Params, Router} from '@angular/router';
import {Page} from '@root/app/shared/constants/pages.constant';

@Injectable()
export class NavigationService {
  constructor(private router: Router) {}

  public redirect(page: Page, param: string = ''): void {
    const commands: string[] = param ? [page, param] : [page];

    this.router.navigate(commands, )
      .catch((error: Error) => console.error('Router error:', error));
  }
}
