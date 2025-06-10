import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="relative w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-800 p-8 flex flex-col items-center">
        <button (click)="close()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl focus:outline-none" aria-label="Cerrar">
          &times;
        </button>
        <h2 class="mt-2 mb-6 text-3xl font-extrabold text-center" dark:text-white>
          {{ translations[currentLanguage].title }}
        </h2>
        <!-- Botón de Google -->
        <button class="w-full flex items-center justify-center gap-2 py-2 px-4 mb-6 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition font-medium text-gray-700 shadow-sm">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5">
          <span>Continuar con Google</span>
        </button>
        <div class="w-full flex items-center mb-6">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="mx-2 text-gray-400 text-sm">o</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
        <!-- Formulario de email -->
        <form class="w-full space-y-4" (ngSubmit)="onSubmit()">
          <div>
            <label for="email-address" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ translations[currentLanguage].emailLabel }}</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required
              [(ngModel)]="email"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-[#7CB518] focus:border-[#7CB518] sm:text-sm dark:bg-gray-800 dark:text-white"
              [placeholder]="translations[currentLanguage].emailPlaceholder">
          </div>
          <button type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#215A3D] hover:bg-[#1a4730] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7CB518]">
            Enviar código de verificación
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class LoginComponent {
  currentLanguage = 'es';
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  @Output() closeModal = new EventEmitter<void>();

  translations: { [key: string]: { title: string; subtitle: string; emailLabel: string; emailPlaceholder: string; passwordLabel: string; passwordPlaceholder: string; rememberMe: string; forgotPassword: string; signIn: string } } = {
    es: {
      title: 'Iniciar Sesión',
      subtitle: 'Ingresa tus credenciales para continuar',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'Correo electrónico',
      passwordLabel: 'Contraseña',
      passwordPlaceholder: 'Contraseña',
      rememberMe: 'Recordarme',
      forgotPassword: '¿Olvidaste tu contraseña?',
      signIn: 'Iniciar Sesión'
    },
    en: {
      title: 'Sign In',
      subtitle: 'Enter your credentials to continue',
      emailLabel: 'Email address',
      emailPlaceholder: 'Email address',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot your password?',
      signIn: 'Sign In'
    }
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe((lang: string) => {
      this.currentLanguage = lang;
    });
  }

  onSubmit() {
    console.log('Form submitted', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });
  }

  close() {
    this.closeModal.emit();
  }
} 