import { Injectable } from '@angular/core';
import { DetailedCapsule } from '../../models/DetailedCapsule';
import { Observable } from 'rxjs/index';
import { SpacexApiService } from '../spacex-api.service';

@Injectable({
  providedIn: 'root'
})
export class DetailedCapsuleService {

  constructor(private appService: SpacexApiService) { }

  fetchAllDetailedCapsules(): Observable<DetailedCapsule[]> {
    return this.appService.get('parts/caps');
  }

  fetchDetailedCapsule(detailedcapsuleId: string): Observable<DetailedCapsule> {
    return this.appService.get(`parts/caps/${detailedcapsuleId}`);
  }
}
