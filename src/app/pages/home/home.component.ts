import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LaunchService} from '../../services/launch/launch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nextLaunch: any = [];
  error = '';

  constructor(private launchService: LaunchService) { }

  ngOnInit() {
    this.getNextLaunch();
  }

  getNextLaunch(){
    this.launchService.fetchNextLaunch().toPromise().then(
      (result) => {
        console.log(result);
        this.nextLaunch = result;
      }
    ).catch(
      (er) => {
        this.error = er;
      }
    );
  }

}
