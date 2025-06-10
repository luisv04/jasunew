import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

interface Translations {
  [key: string]: {
    hero: {
      title: string;
      subtitle: string;
      button: string;
    };
    features: {
      title: string;
      quality: {
        title: string;
        description: string;
      };
      delivery: {
        title: string;
        description: string;
      };
      shopping: {
        title: string;
        description: string;
      };
    };
  };
}

@Component({
  selector: 'app-home',
  template: `
    <div class="min-h-screen p-0 m-0">
      <!-- Hero Section -->
      <section class="relative h-[600px] w-full p-0 m-0">
        <div class="absolute inset-0 p-0 m-0">
          <img 
            src="/assets/images/portada.jpg" 
            alt="Fruits and vegetables" 
            class="w-full h-full object-cover p-0 m-0"
          >
          <div class="absolute inset-0 bg-[#215A3D] bg-opacity-10 p-0 m-0"></div>
        </div>
        
        <div class="relative h-full flex items-center justify-center text-center p-0 m-0">
          <div class="max-w-3xl">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 text-[#215A3D] dark:text-[#215A3D]">
              {{ translations[currentLanguage].hero.title }}
            </h1>
            <p class="text-xl mb-8 text-[#215A3D] dark:text-[#215A3D]">
              {{ translations[currentLanguage].hero.subtitle }}
            </p>
            <button 
              routerLink="/products"
              class="bg-[#7CB518] hover:bg-[#6a9e15] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              {{ translations[currentLanguage].hero.button }}
            </button>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-16 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold text-center mb-12">{{ translations[currentLanguage].features.title }}</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div class="w-12 h-12 bg-[#7CB518] rounded-full flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="text-xl font-medium mb-2">{{ translations[currentLanguage].features.quality.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ translations[currentLanguage].features.quality.description }}</p>
            </div>

            <!-- Feature 2 -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div class="w-12 h-12 bg-[#7CB518] rounded-full flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-medium mb-2">{{ translations[currentLanguage].features.delivery.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ translations[currentLanguage].features.delivery.description }}</p>
            </div>

            <!-- Feature 3 -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div class="w-12 h-12 bg-[#7CB518] rounded-full flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-medium mb-2">{{ translations[currentLanguage].features.shopping.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ translations[currentLanguage].features.shopping.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  currentLanguage = 'es';
  translations: Translations = {
    es: {
      hero: {
        title: 'Productos Frescos y Saludables',
        subtitle: 'Descubre nuestra selección de frutas y verduras de primera calidad',
        button: 'Ver Productos'
      },
      features: {
        title: '¿Por qué elegirnos?',
        quality: {
          title: 'Calidad Garantizada',
          description: 'Seleccionamos cuidadosamente los mejores productos para nuestros clientes'
        },
        delivery: {
          title: 'Entrega Rápida',
          description: 'Entrega rápida y confiable hasta tu puerta'
        },
        shopping: {
          title: 'Compras Fáciles',
          description: 'Experiencia de compra en línea simple y segura'
        }
      }
    },
    en: {
      hero: {
        title: 'Fresh & Healthy Products',
        subtitle: 'Discover our selection of premium quality fruits and vegetables',
        button: 'View Products'
      },
      features: {
        title: 'Why Choose Us',
        quality: {
          title: 'Quality Guaranteed',
          description: 'We carefully select the best products for our customers'
        },
        delivery: {
          title: 'Fast Delivery',
          description: 'Quick and reliable delivery to your doorstep'
        },
        shopping: {
          title: 'Easy Shopping',
          description: 'Simple and secure online shopping experience'
        }
      }
    }
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe((lang: string) => {
      this.currentLanguage = lang;
    });
  }
} 