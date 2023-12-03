import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CurrentUserService } from '../User/current-user.service';
import { UserInterface } from '../User/user';
import { Router } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  http = inject(HttpClient);
  router = inject(Router);
  userService = inject(CurrentUserService);

  errors = { emailorpassword: [''] };

  isArray(obj: any) {
    return Array.isArray(obj);
  }

  logInForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onLogIn() {
    this.http
      .post<UserInterface>('https://api.realworld.io/api/users/login', {
        user: this.logInForm.getRawValue(),
      })
      .subscribe(
        (user) => {
          this.userService.setUser(user);
          localStorage.setItem('token', user.user.token);
        },
        (error) => {
          console.log(error);
          this.errors.emailorpassword = error.error.errors['email or password'];
        },
        () => {
          this.router.navigateByUrl('');
        }
      );
  }
}
