import { Injectable, signal } from '@angular/core';
import { UserInterface } from './user';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  currentUserSig = signal<undefined | UserInterface | null>(undefined);

  constructor() {}

  setUser(user: UserInterface | undefined | null) {
    this.currentUserSig.set(user);
  }
}
