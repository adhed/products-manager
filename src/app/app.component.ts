import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isActivated: boolean = false;

  public handleActivate(): void {
    this.isActivated = true;
  }
}
