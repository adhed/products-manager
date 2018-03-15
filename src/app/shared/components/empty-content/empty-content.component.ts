import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-empty-content',
  templateUrl: './empty-content.component.html',
  styleUrls: ['./empty-content.component.scss']
})
export class EmptyContentComponent {
  @HostBinding('attr.class') public hostClass: string = 'empty-content';
}
