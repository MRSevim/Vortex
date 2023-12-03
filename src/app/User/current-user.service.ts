import { Injectable, signal } from '@angular/core';
import { UserInterface } from './user';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  user: undefined | UserInterface = undefined;

  isLoggedIn: boolean = false;

  constructor() {}

  setUser(user: UserInterface) {
    this.user = user;
    this.isLoggedIn = this.user !== undefined;
  }
  getUser(): UserInterface {
    return this.user as UserInterface;
  }
}
