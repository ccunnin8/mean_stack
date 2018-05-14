import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WeatherComponent } from './weather/weather.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: WeatherComponent,
    children: []
  },
  {
    path: ":city",
    component: WeatherComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
