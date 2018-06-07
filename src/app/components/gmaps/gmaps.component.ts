import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent implements OnInit {
  @Input() lat;
  @Input() lng;

  constructor() { }

  ngOnInit() {

  }

}
