import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { LaunchesListComponent } from '../../pages/launches-list/launches-list.component';
import {CapsulesComponent} from '../../pages/capsules/capsules.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'launches', component: LaunchesListComponent },
  { path: 'capsules', component: CapsulesComponent },
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
