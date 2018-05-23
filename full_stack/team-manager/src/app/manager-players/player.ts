enum Status {
  "Playing" = 1,
  "Not Playing" = 2,
  "Undecided" = 3
}

interface Games {
  game1: Status;
  game2: Status;
  game3: Status;
}

export class Player {
  public name: string;
  public position: string;
  public games: Games;
  constructor(){
    this.games = {
      game1: 3,
      game2: 3,
      game3: 3,
    }
  }
}
