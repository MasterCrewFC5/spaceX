import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../../services/launch/launch.service';
import {Launch} from '../../models/Launch';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {

  launchesUpcomning: any = [];
  launchesPast: any = [];

  error = '';

  constructor(private launchService: LaunchService) { }

  ngOnInit() {
    this.getUpcomingLaunchesList();
    this.getPastLaunchesList();
  }

  getUpcomingLaunchesList() {
    this.launchService.fetchUpcomingLaunches().toPromise().then(
      (result) => {
        console.log(result);
        this.launchesUpcomning = result;
      }
    ).catch(
       (er) => {
        this.error = er;
      }
    );
  }

  getPastLaunchesList() {
    this.launchService.fetchPastLaunches().toPromise().then(
      (result) => {
        console.log(result);
        this.launchesPast = result;
      }
    ).catch(
      (er) => {
        this.error = er;
      }
    );
  }

}
