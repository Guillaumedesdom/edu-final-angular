import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/product.service';

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
export class ShopProductComponent implements OnInit{
  id: number | null = null;
  product: Product | null = null;
  constructor(private route: ActivatedRoute, private _productService: ProductService){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this._getProduct();
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
