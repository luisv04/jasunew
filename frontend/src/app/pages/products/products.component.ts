import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  template: `
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-6">Productos</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Aquí irá el contenido de los productos -->
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProductsComponent {
  title = 'Products';
} 