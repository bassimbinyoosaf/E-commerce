import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserProfile {
  username: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userProfile = new BehaviorSubject<UserProfile | null>(null);

  isLoggedIn$ = this.loggedIn.asObservable();
  userProfile$ = this.userProfile.asObservable();

  login(username: string, email?: string) {
    this.userProfile.next({ username, email });
    this.loggedIn.next(true);
  }

  logout() {
    this.userProfile.next(null);
    this.loggedIn.next(false);
  }
}
