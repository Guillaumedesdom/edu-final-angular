import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product/product.service';
import { LoaderService } from '../loader/loader.service';

type Product = {
  albumId: number,
  id: number,
  title: string,
  thumbnailUrl: string
};

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrl: './shop-product.component.css'
})
export class ShopProductComponent implements OnInit, AfterViewInit{
  id: number | null = null;
  product: Product | null = null;
  constructor(private route: ActivatedRoute, private _router: Router, private _productService: ProductService, private _loaderService: LoaderService){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this._getProduct();
  }
  ngAfterViewInit(): void {
      this._loaderService.setloadingScreenState(false);
  }
  private _getProduct(){
    if(this.id===null) return;
    this._productService.getProduct(this.id).subscribe((data: Product)=>{
      this.product = data;
    })
  }
  add(){
    if(this.id===null) return;
    this._productService.setCounter(this.id);
  }
}
