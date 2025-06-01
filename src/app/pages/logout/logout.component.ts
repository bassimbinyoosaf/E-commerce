import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private userService: UserService, private router: Router) {
    this.userService.logout();
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}
