import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header (openLoginModal)="showLoginModal = true"></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <div *ngIf="showLoginModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <app-login (closeModal)="showLoginModal = false"></app-login>
    </div>
  `,
  styles: [],
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent, LoginComponent]
})
export class AppComponent {
  title = 'jasu-frontend';
  showLoginModal = false;
} 