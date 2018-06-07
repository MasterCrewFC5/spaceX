import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { DetailedCore } from '../../models/DetailedCore';
import { SpacexApiService } from '../spacex-api.service';

@Injectable({
  providedIn: 'root'
})
export class DetailedCoreService {

  constructor(private appService: SpacexApiService) { }

  fetchAllDetailedCores(): Observable<DetailedCore[]> {
    return this.appService.get('parts/cores');
  }

  fetchDetailedCore(detailedCoreId: string): Observable<DetailedCore> {
    return this.appService.get(`parts/cores/${detailedCoreId}`);
  }
}
