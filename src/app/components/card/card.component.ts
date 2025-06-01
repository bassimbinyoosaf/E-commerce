import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: any;
  
  // Category image mapping with index signature for type safety
  private categoryImages: {[key: string]: string} = {
    'electronics': 'assets/category-icons/electronics.png',
    'jewelery': 'assets/category-icons/jewelery.png',
    'men\'s clothing': 'assets/category-icons/mens-clothing.png',
    'women\'s clothing': 'assets/category-icons/womens-clothing.png'
  };

  // Fallback images if category-specific images are not available
  private fallbackImages: {[key: string]: string} = {
    'electronics': 'https://cdn-icons-png.flaticon.com/512/3659/3659898.png',
    'jewelery': 'https://cdn-icons-png.flaticon.com/512/3109/3109867.png',
    'men\'s clothing': 'https://cdn-icons-png.flaticon.com/512/2589/2589625.png',
    'women\'s clothing': 'https://cdn-icons-png.flaticon.com/512/3893/3893209.png',
    'default': 'https://cdn-icons-png.flaticon.com/512/4290/4290854.png'
  };

  /**
   * Get the appropriate image for the product category
   * @returns URL of the category image
   */
  getCategoryImage(): string {
    if (!this.product || !this.product.category) {
      return this.fallbackImages['default'];
    }
    
    // Try to use local assets first
    if (this.categoryImages[this.product.category]) {
      return this.categoryImages[this.product.category];
    }
    
    // Fallback to external images if local assets are not available
    return this.fallbackImages[this.product.category] || this.fallbackImages['default'];
  }
}
