import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  email: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    console.log('Login attempt:', { username: this.username, email: this.email });
    this.userService.login(this.username, this.email);
    console.log('Login successful');
    this.router.navigate(['/']);
  }
}
