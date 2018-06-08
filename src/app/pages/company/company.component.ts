import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../services/company/company.service';
import {Launch} from '../../models/Launch';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    company: any = [];

    error = '';

    constructor(private companyService: CompanyService) {
    }

    ngOnInit() {
        this.getCompanyInfo();
    }

    getCompanyInfo() {
        this.companyService.getCompanyInfo().toPromise().then(
            (result) => {
                console.log(result);
                this.company = result;
            }
        ).catch(
            (er) => {
                this.error = er;
            }
        );
    }

}
