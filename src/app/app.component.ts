import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'edu-final-app';
  public fadedFullScreenLoaderFlag: boolean;
  private _timeouts: NodeJS.Timeout;
  constructor(private _loaderService: LoaderService){
    this.fadedFullScreenLoaderFlag = true;
    this._timeouts = setTimeout(()=>{}, 0);
  }
  /**
   * Functions provided by the section Managing the State of the Application
   */
  // private _subscribeToScreenObservable = (state: boolean)=>{
  //   this.fadedFullScreenLoaderFlag = state;
  // }
  // private _subscribeToScreenObservable = (state: boolean)=>{
  //   this._timeouts = setTimeout(()=>{
  //     this.fadedFullScreenLoaderFlag = state;
  //   }, 10);
  // }
  private _subscribeToLoaderObservable(){
    this._loaderService.loaderObservable$.subscribe((data: boolean)=>{
      this.fadedFullScreenLoaderFlag = data;
    });
  }
  ngOnInit(): any{
    this._subscribeToLoaderObservable();
  }
}
