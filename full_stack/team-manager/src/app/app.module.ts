import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ManagerPlayersComponent } from './manager-players/manager-players.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PlayerListComponent } from './manager-players/player-list/player-list.component';
import { AddPlayerComponent } from './manager-players/add-player/add-player.component';
import { GameComponent } from './player-status/game/game.component';
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    ManagerPlayersComponent,
    PlayerStatusComponent,
    PlayerListComponent,
    AddPlayerComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
