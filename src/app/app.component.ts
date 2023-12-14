import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurrentUserService } from './User/current-user.service';
import { UserInterface } from './User/user';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Vortex';

  token: string | null = '';

  http = inject(HttpClient);
  currentUser = inject(CurrentUserService);

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    let options = {
      headers: { Authorization: `Token ${this.token}` },
    };

    this.http
      .get<UserInterface>('https://api.realworld.io/api/user', options)
      .subscribe({
        next: (data) => {
          this.currentUser.setUser(data);
          document.body.classList.remove('loading');
        },
        error: () => {
          this.currentUser.setUser(null);
          document.body.classList.remove('loading');
        },
      });
  }
}
