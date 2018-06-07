import { Injectable } from '@angular/core';
import { Capsule } from '../../models/Capsule';
import { Observable } from 'rxjs/index';
import { SpacexApiService } from '../spacex-api.service';

@Injectable({
  providedIn: 'root'
})
export class CapsuleService {

  constructor(private appService: SpacexApiService) { }

  fetchAllCapsules(): Observable<Capsule[]> {
    return this.appService.get('capsules');
  }

  fetchCapsule(capsuleId: string): Observable<Capsule> {
    return this.appService.get(`capsules/${capsuleId}`);
  }
}
