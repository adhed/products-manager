import { Component, Input, OnChanges} from '@angular/core';
import { RequestResult, RequestResultType } from '@root/app/shared/models/request-result.model';

@Component({
  selector: 'my-request-result',
  templateUrl: './request-result.component.html',
  styleUrls: ['./request-result.component.scss']
})
export class RequestResultComponent implements OnChanges {
  @Input() public result: RequestResult;

  public isChipVisible: boolean = false;

  public ngOnChanges(): void {
    this.isChipVisible = true;
  }

  public get isSuccess(): boolean {
    return this.result.type === RequestResultType.SUCCESS;
  }

  public get chipColor(): string {
    return this.isSuccess ? `primary` : 'warn';
  }

  public onChipRemove(): void {
    this.isChipVisible = false;
  }

  public hideResult(): void {
    this.isChipVisible = false;
  }
}
