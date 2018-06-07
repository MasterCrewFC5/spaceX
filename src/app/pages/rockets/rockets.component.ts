import { Component, OnInit } from '@angular/core';
import {RocketService} from '../../services/rocket/rocket.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {

  rockets: any = [];
  error = '';

  constructor(private rocketService: RocketService) { }

  ngOnInit() {
    this.getRockets();
  }

  getRockets() {
    this.rocketService.fetchAll().toPromise().then(
      (result) => {
        this.rockets = result;
      }
    ).catch(
      (er) => {
        this.error = er;
      }
    );
  }
}
