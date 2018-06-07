import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { SpacexApiService } from './services/spacex-api.service';
import { HttpClientModule } from '@angular/common/http';
import { LaunchesListComponent } from './pages/launches-list/launches-list.component';
import {MatToolbarModule} from '@angular/material';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CapsulesComponent } from './pages/capsules/capsules.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { GmapsComponent } from './components/gmaps/gmaps.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaunchesListComponent,
    TopbarComponent,
    FooterComponent,
    CapsulesComponent,
    GmapsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatToolbarModule,
    MDBBootstrapModule,
    NgHttpLoaderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAziFR-NOwLCLmdvFbmTjMzd0Fg-RR0NSw'
    })
  ],
  providers: [SpacexApiService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
