import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { mean, sum } from 'lodash';

@Component({
  selector: 'ssl-datapoint',
  templateUrl: './datapoint.component.html',
  styleUrls: ['./datapoint.component.scss']
})
export class DatapointComponent implements OnInit, OnChanges {
  public renderAverage: number;
  public renderMostRecent: number;
  public renderSum: number;

  @Input() label: string;
  @Input() averageOfNumbers: number[];
  @Input() mostRecentOfNumbers: number[];
  @Input() sumOfNumbers: number[];
  @Input() directNumber: number;
  @Input() directString: string;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(e) {
    if (this.averageOfNumbers) {
      this.renderAverage = mean(this.averageOfNumbers);
    }

    if (this.mostRecentOfNumbers) {
      this.renderMostRecent = this.mostRecentOfNumbers[
        this.mostRecentOfNumbers.length - 1
      ];
    }

    if (this.sumOfNumbers) {
      this.renderSum = sum(this.sumOfNumbers);
    }
  }
}
