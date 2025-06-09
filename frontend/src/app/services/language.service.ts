import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('es');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor() {
    // Verificar si el usuario tiene una preferencia guardada
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.currentLanguageSubject.next(savedLanguage);
    } else {
      // Usar el idioma del navegador
      const browserLang = navigator.language.split('-')[0];
      this.currentLanguageSubject.next(browserLang === 'es' ? 'es' : 'en');
    }
  }

  toggleLanguage(): void {
    const newValue = this.currentLanguageSubject.value === 'es' ? 'en' : 'es';
    this.currentLanguageSubject.next(newValue);
    localStorage.setItem('language', newValue);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }
} 