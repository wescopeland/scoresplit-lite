import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ssl-datapoint',
  templateUrl: './datapoint.component.html',
  styleUrls: ['./datapoint.component.scss']
})
export class DatapointComponent implements OnInit {
  @Input() label: string;
  @Input() numberValue: number;
  @Input() stringValue: string;

  constructor() {}

  ngOnInit() {}
}
