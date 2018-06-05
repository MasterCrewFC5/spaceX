import {Component, Input, OnInit} from '@angular/core';
import { MapChart } from 'angular-highcharts';

@Component({
  selector: 'app-launchs-map',
  templateUrl: './launchs-map.component.html',
  styleUrls: ['./launchs-map.component.css']
})
export class LaunchsMapComponent implements OnInit {
  @Input()
  chart: Object

  constructor() { }

  ngOnInit() {
    this.chart = new MapChart({ options });
  }

}
