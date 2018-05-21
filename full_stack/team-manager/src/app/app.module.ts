import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { ManagerPlayersComponent } from './manager-players/manager-players.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PlayerListComponent } from './manager-players/player-list/player-list.component';
import { AddPlayerComponent } from './manager-players/add-player/add-player.component';
import { Game1Component } from './player-status/game1/game1.component';
import { Game2Component } from './player-status/game2/game2.component';
import { Game3Component } from './player-status/game3/game3.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerPlayersComponent,
    PlayerStatusComponent,
    PlayerListComponent,
    AddPlayerComponent,
    Game1Component,
    Game2Component,
    Game3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
