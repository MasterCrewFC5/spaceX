import { Component, OnInit } from '@angular/core';
import { CapsuleService } from '../../services/capsule/capsule.service';


@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {

  Capsules: any = [];

  error = '';

  constructor(private capsuleService: CapsuleService) { }

  ngOnInit() {
    this.getCapsulesList();
  }

  getCapsulesList() {
    this.capsuleService.fetchAllCapsules().toPromise().then(
      (result) => {
        console.log(result);
        this.Capsules = result;
      }
    ).catch(
      (er) => {
        this.error = er;
      }
    );
  }

}
