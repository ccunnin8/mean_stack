import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RankingsComponent } from "./rankings/rankings.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: LandingPageComponent
  },
  {
    path: "results",
    pathMatch: "full",
    component: ResultsComponent
  },
  {
    path: "rankings",
    pathMatch: "full",
    component: RankingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
