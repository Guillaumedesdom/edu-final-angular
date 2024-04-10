import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

type Product = {
  albumId: number,
  id: number,
  title: string,
  thumbnailUrl: string
};

const BASE_URL_PHOTOS: string = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  counter: number = 0;
  products: Array<Product> = [];
  
  private _tokenProviderSubject: BehaviorSubject<{counter: number, id: number}>;
  public tokenProviderObservable$: Observable<{counter: number, id: number}>;
  constructor(private http: HttpClient) {
    this._tokenProviderSubject = new BehaviorSubject({counter: 0, id: -1});
    this.tokenProviderObservable$ = this._tokenProviderSubject.asObservable();
  }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(BASE_URL_PHOTOS);
  }
  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(BASE_URL_PHOTOS+'/'+id);
  }
  setCounter(id: number){
    id === null ? (this.counter = 0) : (++this.counter);
    this.getProduct(id).subscribe((data)=>{
      this.products.push(data);
    });
    this._tokenProviderSubject.next({counter: this.counter, id: id});
  }
}
