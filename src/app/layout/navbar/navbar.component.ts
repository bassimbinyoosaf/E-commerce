import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService, UserProfile } from '../../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn$: Observable<boolean>;
  userProfile$: Observable<UserProfile | null>;

  constructor(private userService: UserService, private router: Router) {
    this.isLoggedIn$ = this.userService.isLoggedIn$;
    this.userProfile$ = this.userService.userProfile$;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/logout']);
  }
}
