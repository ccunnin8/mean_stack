import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { BurbannkComponent } from './burbannk/burbannk.component';
import { WashingtonComponent } from './washington/washington.component';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanjoseComponent } from './sanjose/sanjose.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: WashingtonComponent,
    children: []
  },
  {
    path: "seattle",
    component: SeattleComponent,
    pathMatch: "full"
  },
  {
    path: "sanjose",
    component: SanjoseComponent,
    pathMatch: "full"
  },
  {
    path: "burbank",
    component: BurbannkComponent,
    pathMatch: "full"
  },
  {
    path: "dallas",
    component: DallasComponent,
    pathMatch: "full"
  },
  {
    path: "chicago",
    component: ChicagoComponent,
    pathMatch: "full",
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
