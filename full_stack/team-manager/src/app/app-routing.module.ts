import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerPlayersComponent } from "./manager-players/manager-players.component";
import { PlayerStatusComponent } from "./player-status/player-status.component";
import { AddPlayerComponent } from "./manager-players/add-player/add-player.component";
import { PlayerListComponent } from "./manager-players/player-list/player-list.component";
import { GameComponent } from "./player-status/game/game.component";
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
      { path: "game/:id", component: GameComponent, pathMatch: "full" },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
