import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { LoaderService } from '../loader/loader.service';

type Product = {
  albumId: number,
  id: number,
  title: string,
  thumbnailUrl: string,
};

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit{
  public products: Array<Product> = [];
  constructor(private _productService: ProductService, private _loaderService: LoaderService) {
  }

  private _subscribeToProducts (){
    this._productService.tokenProviderObservable$.subscribe((data)=>{
      console.log(data);
      this._getProd(data.id);
    });
  }
  private _getProd(id: number){
    if(id<0) return;

    this._productService.getProduct(id).subscribe((data)=>{
      console.log(data);
      this._productService.products.push(data);
      debugger;
      this.products = this._productService.products;
    });
  }
  ngOnInit(): void {
    this._loaderService.setloadingScreenState(false);
    this.products = this._productService.products;
  }
}
