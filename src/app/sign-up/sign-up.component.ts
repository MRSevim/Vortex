import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserInterface } from '../User/user';

import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurrentUserService } from '../User/current-user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  http = inject(HttpClient);
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
          console.log(this.userService.isLoggedIn);
        },
        (error) => {
          console.log(error);
          this.errors.username = error.error.errors.username;
          this.errors.email = error.error.errors.email;
          this.errors.password = error.error.errors.password;
        },
        () => {}
      );
  }
}
