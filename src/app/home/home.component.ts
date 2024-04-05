import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  constructor(private _productService: ProductService) {
  }

}
