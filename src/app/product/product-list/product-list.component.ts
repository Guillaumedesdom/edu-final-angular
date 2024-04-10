import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoaderService } from '../../loader/loader.service';

type Product = {
  albumId: number,
  id: number,
  title: string,
  thumbnailUrl: string
};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class ProductListComponent implements OnInit{
  public products: Product[] = [];
  constructor(private _productService: ProductService, private _router: Router, private _loaderService: LoaderService){}
  private _getProductList(){
    this._loaderService.setloadingScreenState(true);
    this._productService.getProducts()
      .subscribe((data: Product[])=>{
        this.products = data.slice(0, 50) ;
        this._loaderService.setloadingScreenState(false);
      })
  }
  buy(id: number){
    this._loaderService.setloadingScreenState(true);
    this._router.navigate(['/shop-product', id]);
  }
  ngOnInit(): void {
      this._getProductList();
  }
}
