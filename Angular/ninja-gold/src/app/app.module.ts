import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { GoldCountComponent } from './gold-count/gold-count.component';
import { OptionsComponent } from './options/options.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GoldCountComponent,
    OptionsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
