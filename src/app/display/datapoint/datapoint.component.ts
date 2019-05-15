import {
  Component,
  Input,
  SimpleChanges,
  OnInit,
  OnChanges
} from '@angular/core';
import { mean, sum } from 'lodash';

@Component({
  selector: 'ssl-datapoint',
  templateUrl: './datapoint.component.html',
  styleUrls: ['./datapoint.component.scss']
})
export class DatapointComponent implements OnInit, OnChanges {
  public differential: number;
  public renderAverage: number;
  public renderMostRecent: number;
  public renderSum: number;

  @Input() averageOfNumbers: number[];
  @Input() directNumber: number;
  @Input() directString: string;
  @Input() isShowingNumberDifferentials: boolean;
  @Input() label: string;
  @Input() mostRecentOfNumbers: number[];
  @Input() sumOfNumbers: number[];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(e: SimpleChanges) {
    if (e.directNumber && !e.directNumber.firstChange) {
      this.differential =
        e.directNumber.currentValue - e.directNumber.previousValue;
    } else if (this.averageOfNumbers) {
      if (e.renderAverage && !e.renderAverage.firstChange) {
        this.differential =
          e.renderAverage.currentValue - e.renderAverage.previousValue;
      }

      this.renderAverage = mean(this.averageOfNumbers);
    } else if (this.mostRecentOfNumbers) {
      if (e.mostRecentOfNumbers && !e.mostRecentOfNumbers.firstChange) {
        this.differential =
          e.mostRecentOfNumbers.currentValue[
            e.mostRecentOfNumbers.currentValue.length - 1
          ] -
          e.mostRecentOfNumbers.previousValue[
            e.mostRecentOfNumbers.previousValue.length - 1
          ];
      }

      this.renderMostRecent = this.mostRecentOfNumbers[
        this.mostRecentOfNumbers.length - 1
      ];
    } else if (this.sumOfNumbers) {
      if (e.sumOfNumbers && !e.sumOfNumbers.firstChange) {
        this.differential =
          sum(e.sumOfNumbers.currentValue) - sum(e.sumOfNumbers.previousValue);
      }

      this.renderSum = sum(this.sumOfNumbers);
    }
  }
}
