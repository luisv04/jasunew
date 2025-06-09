import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-6">Calculator</h1>
      <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <!-- Aquí irá el contenido de la calculadora -->
      </div>
    </div>
  `,
  styles: []
})
export class CalculatorComponent {
  title = 'Calculator';
} 