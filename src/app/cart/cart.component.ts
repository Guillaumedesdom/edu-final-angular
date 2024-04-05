import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit{
  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
  }
}
