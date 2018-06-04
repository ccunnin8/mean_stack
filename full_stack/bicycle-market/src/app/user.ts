import { Bicycle } from './bicycle';

export class User {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_conf: string;
  bicycles: Array<Bicycle>;
  constructor() {
  }
}
