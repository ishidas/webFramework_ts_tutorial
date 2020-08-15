import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
// optional will allow you to create and empty user object which is useful for creating an account for a user.

export interface UserProps {
  id?: number; //optional
  name?: string; // optional
  age?: number; // optional
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps>{

  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }

}

