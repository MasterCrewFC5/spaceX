import {Component, OnInit} from '@angular/core';
import {LaunchpadService} from '../../services/launchpad/launchpad.service';
import {Launch} from '../../models/Launch';
import { MatDialog, MatDialogModule } from '@angular/material';
import { DetailLaunchpadDialogComponent } from '../../components/detail-launchpad-dialog/detail-launchpad-dialog.component';

@Component({
  selector: 'app-launchpad-list',
  templateUrl: './launchpad-list.component.html',
  styleUrls: ['./launchpad-list.component.css']
})
export class LaunchpadListComponent implements OnInit {

  launchpads: any = [];

  error = '';

  constructor(private launchpadService: LaunchpadService,
              public dialog: MatDialog) {
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

  openDialog(id: string) {
    this.launchpadService.fetchLaunchpad(id).toPromise()
      .then(result => {
        this.dialog.open(DetailLaunchpadDialogComponent, {
          data: result
        });
      }).catch(error => {
      this.error = error;
    });
  }
}
