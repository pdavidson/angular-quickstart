import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { AppComponent }   from './app.component';
import { SmartSearchButton } from './smart-search/button.component';
import { SmartSearch } from './smart-search/smart-search.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule 
  ],
  declarations: [ 
    AppComponent,
    SmartSearch,
    SmartSearchButton
  ],
  bootstrap:    [ AppComponent, SmartSearch ]  
})
export class AppModule { }
