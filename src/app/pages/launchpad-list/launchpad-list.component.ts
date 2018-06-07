import {Component, OnInit} from '@angular/core';
import {LaunchpadService} from '../../services/launchpad/launchpad.service';
import {Launch} from '../../models/Launch';

@Component({
  selector: 'app-launchpad-list',
  templateUrl: './launchpad-list.component.html',
  styleUrls: ['./launchpad-list.component.css']
})
export class LaunchpadListComponent implements OnInit {

  launchpads: any = [];

  error = '';

  constructor(private launchpadService: LaunchpadService) {
  }

  ngOnInit() {
    this.getLaunchpads();
  }

  getLaunchpads() {
    this.launchpadService.fetchAllLaunchpads().toPromise().then(
      (result) => {
        console.log(result);
        this.launchpads = result;
      }
    ).catch(
      (er) => {
        this.error = er;
      }
    );
  }
}
