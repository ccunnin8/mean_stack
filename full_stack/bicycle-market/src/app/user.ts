import { Bicycle } from './bicycle';

export class User {
  email: string;
  password: string; //HASH W BCRYPT IN EXPRESS 
  bicycles: Array<Bicycle>
  constructor() {
  }
}
