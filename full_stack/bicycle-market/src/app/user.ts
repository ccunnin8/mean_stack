import { Bicycle } from './bicycle';

export class User {
  email: string;
  password: string; //HASH W BCRYPT
  bicycles: Array<Bicycle>
  constructor() {}
}
