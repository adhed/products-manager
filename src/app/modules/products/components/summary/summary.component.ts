import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'my-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Input() public items: number;
  @Output() public addButtonClick: EventEmitter<void> = new EventEmitter();

  public onProductAddClick(): void {
    this.addButtonClick.emit();
  }
}
