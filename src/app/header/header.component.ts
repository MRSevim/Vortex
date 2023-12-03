import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CurrentUserService } from '../User/current-user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userService = inject(CurrentUserService);
  isLoggedIn: boolean = this.userService.isLoggedIn;
}
