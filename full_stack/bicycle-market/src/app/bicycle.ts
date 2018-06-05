import { User } from './user';

export class Bicycle {
  title: string;
  description: string;
  location: string;
  price: string;
  image: any; //will be location of image stored as a file, location stored in mongo
  user: User
  constructor() {}
}
