import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { LaunchesListComponent } from '../../pages/launches-list/launches-list.component';
import { CompanyComponent } from '../../pages/company/company.component';
import { RocketsComponent } from '../../pages/rockets/rockets.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'launches', component: LaunchesListComponent },
  { path: 'rockets', component: RocketsComponent },
  { path: 'company', component: CompanyComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
