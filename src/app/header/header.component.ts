import {
  Component,
  inject,
  computed,
  HostListener,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { CurrentUserService } from '../User/current-user.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  userService = inject(CurrentUserService);
  menuToggle = true;
  darkMode = false;

  ngOnInit(): void {
    let darkMode = JSON.parse(<string>localStorage.getItem('dark-mode'));
    if (darkMode) {
      this.darkModeToggle();
    }
  }

  profileImg = computed<string>(
    () => `url(${this.userService.currentUserSig()?.user?.image})`
  );
  logOut() {
    localStorage.setItem('token', '');
    this.userService.setUser(null);
  }
  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }
  darkModeToggle() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('dark-mode', JSON.stringify(this.darkMode));
    document.body.classList.toggle('dark-mode');
  }
  @HostListener('window:click', ['$event.target'])
  onClick(element: HTMLElement) {
    if (!this.menuToggle) {
      if (!document.querySelector('.parent')?.contains(element)) {
        this.menuToggle = true;
      }
    }
  }
}
