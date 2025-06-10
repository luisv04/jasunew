import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-white dark:bg-gray-800 shadow-md">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="block">
              <img 
                [src]="isDarkMode ? 'https://assets.jasu.us/logos/jasuWH.png' : 'https://assets.jasu.us/logos/jasu.png'" 
                alt="JASU Logo" 
                class="h-10 w-auto"
              >
            </a>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/products" 
               routerLinkActive="active"
               class="nav-link">
              <span>
                {{ translations[currentLanguage].products }}
              </span>
            </a>
            <a routerLink="/calculator" 
               routerLinkActive="active"
               class="nav-link">
              <span>
                {{ translations[currentLanguage].calculator }}
              </span>
            </a>
          </div>

          <!-- Right Side Actions -->
          <div class="flex items-center space-x-4">
            <!-- Language Selector -->
            <button (click)="toggleLanguage()" 
                    class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    [title]="currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a Español'">
              <span class="text-[#215A3D] dark:text-white font-medium">
                {{ currentLanguage === 'es' ? 'EN' : 'ES' }}
              </span>
            </button>

            <!-- Theme Toggle -->
            <button (click)="toggleTheme()" 
                    class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <svg *ngIf="isDarkMode" class="w-6 h-6 text-[#215A3D] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <svg *ngIf="!isDarkMode" class="w-6 h-6 text-[#215A3D] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            </button>

            <!-- Login Button -->
            <button (click)="openLogin()" 
                    class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    [title]="translations[currentLanguage].login">
              <svg class="w-6 h-6 text-[#215A3D] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
                <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  isDarkMode = false;
  currentLanguage = 'es';

  @Output() openLoginModal = new EventEmitter<void>();

  translations: { [key: string]: { products: string; calculator: string; login: string } } = {
    es: {
      products: 'Productos',
      calculator: 'Calculadora',
      login: 'Iniciar Sesión'
    },
    en: {
      products: 'Products',
      calculator: 'Calculator',
      login: 'Login'
    }
  };

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private languageService: LanguageService
  ) {
    this.themeService.isDarkMode$.subscribe((isDark: boolean) => {
      this.isDarkMode = isDark;
    });
    this.languageService.currentLanguage$.subscribe((lang: string) => {
      this.currentLanguage = lang;
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  openLogin(): void {
    this.openLoginModal.emit();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
} 