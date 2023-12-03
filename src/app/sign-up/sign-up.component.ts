import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserInterface } from '../User/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurrentUserService } from '../User/current-user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  http = inject(HttpClient);
  router = inject(Router);
  userService = inject(CurrentUserService);

  errors = { username: [''], email: [''], password: [''] };

  isArray(obj: any) {
    return Array.isArray(obj);
  }

  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  onSignUp() {
    this.http
      .post<UserInterface>('https://api.realworld.io/api/users', {
        user: this.signUpForm.getRawValue(),
      })
      .subscribe(
        (user) => {
          this.userService.setUser(user);
          localStorage.setItem('token', user.user.token);
        },
        (error) => {
          console.log(error);
          console.log(this.errors.username);
          this.errors.username = error.error.errors.username;
          this.errors.email = error.error.errors.email;
          this.errors.password = error.error.errors.password;
          console.log(this.errors.username);
        },
        () => {
          this.router.navigateByUrl('');
        }
      );
  }
}
