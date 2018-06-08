import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Launchpad } from '../../models/Launchpad';

@Component({
  selector: 'app-detail-launchpad-dialog',
  templateUrl: './detail-launchpad-dialog.component.html',
  styleUrls: ['./detail-launchpad-dialog.component.scss']
})
export class DetailLaunchpadDialogComponent implements OnInit {

  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown = true;

  constructor(public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  closeDialog() {

    this.dialog.closeAll();
  }

  public showModal(): void {
    this.isModalShown = true;
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
  }


}
