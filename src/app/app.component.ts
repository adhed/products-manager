import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isActivated: boolean = false;

  public handleActivate(): void {
    this.isActivated = true;
  }
}
