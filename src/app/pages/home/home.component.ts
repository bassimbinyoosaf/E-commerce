import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ApiService } from '../../api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  products: any;
  categories: any;
  @ViewChildren('productItem') productItems!: QueryList<ElementRef>;

  constructor(private apiServices: ApiService, private el: ElementRef) {
    this.apiServices.getProducts().subscribe(data => {
      this.products = data;
    });

    this.apiServices.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  ngAfterViewInit() {
    this.setAnimationDelays();
  }

  setAnimationDelays() {
    setTimeout(() => {
      const productElements = this.el.nativeElement.querySelectorAll('.product-item');
      productElements.forEach((el: HTMLElement, index: number) => {
        el.style.setProperty('--index', index.toString());
      });
    }, 0);
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }
}
