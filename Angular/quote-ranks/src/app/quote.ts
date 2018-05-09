import uuid from "uuid";

export class Quote {
  constructor(
    public quote: string = "",
    public author: string = "",
    public votes: number = 0,
    public id: string = uuid()
  ){}
}
