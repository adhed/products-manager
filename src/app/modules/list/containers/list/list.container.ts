import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list.container.html',
  styleUrls: ['./list.container.scss']
})
export class ListContainerComponent {
  @HostBinding('attr.class') public hostClass: string = 'list';
}
