import { Injectable } from '@angular/core';
import { Company } from '../../models/Company';
import { Observable } from 'rxjs/index';
import { SpacexApiService } from '../spacex-api.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private appService: SpacexApiService) { }

   getCompanyInfo(): Observable<Company> {
    return this.appService.get('info');
  }
}
