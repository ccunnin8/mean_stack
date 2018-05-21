import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerPlayersComponent } from "./manager-players/manager-players.component";
import { PlayerStatusComponent } from "./player-status/player-status.component";
import { AddPlayerComponent } from "./manager-players/add-player/add-player.component";
import { PlayerListComponent } from "./manager-players/player-list/player-list.component";
import { Game1Component } from "./player-status/game1/game1.component";
import { Game2Component } from "./player-status/game2/game2.component";
import { Game3Component } from "./player-status/game3/game3.component";
import { AppComponent } from "./app.component";
const routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "players/list"
  },
  {
    path: "players",
    children: [
      {
        path: "list",
        pathMatch: "full",
        component: PlayerListComponent
      },
      {
        path: "addplayer",
        pathMatch: "full",
        component: AddPlayerComponent
      }
    ],
    component: ManagerPlayersComponent
  },
  {
    path: "status",
    component: PlayerStatusComponent,
    children: [
      { path: "game/1", component: Game1Component, pathMatch: "full" }
      { path: "game/2", component: Game2Component, pathMatch: "full" }
      { path: "game/3", component: Game3Component, pathMatch: "full" }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
