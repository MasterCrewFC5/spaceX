import { Injectable } from '@angular/core';
import { SpacexApiService } from '../spacex-api.service';
import { Observable } from 'rxjs/index';
import { Launch } from '../../models/Launch';
import { LaunchFilters } from '../../models/LaunchFilters';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private appService: SpacexApiService) { }

  fetchLatestLaunch(): Observable<Launch> {
    return this.appService.get('launches/latest');
  }

  fetchPastLaunches(): Observable<Launch[]> {
    return this.appService.get('launches');
  }

  fetchUpcomingLaunches(): Observable<Launch[]> {
    return this.appService.get('launches/upcoming');
  }

  fetchAllLaunches(): Observable<Launch[]> {
    return this.appService.get('launches/all');
  }

  fetchFilteredLaunches(params: LaunchFilters): Observable<Launch[]> {
    return this.appService.get('launches', { params });
  }

  fetchNextLaunch(): Observable<Launch[]> {
    return this.appService.get('launches/next');
  }
}
