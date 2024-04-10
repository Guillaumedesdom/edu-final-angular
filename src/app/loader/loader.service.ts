import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _loaderSubject = new Subject<boolean>();
  public loaderObservable$: Observable<boolean>;
  constructor() {
    this.loaderObservable$ = this._loaderSubject.asObservable();
  }
  public setloadingScreenState(state: boolean){
    // We are using a Promise because of the Angular change detection after view is rendered
    Promise.resolve().then(()=>this._loaderSubject.next(state));
  }
}
