import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { SmartSearchButton } from './smart-search/button.component';
import { ResultComponent } from './smart-search/result.component';
import { SmartSearch } from './smart-search/smart-search.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule 
  ],
  declarations: [ 
    SmartSearch,
    SmartSearchButton,
    ResultComponent
  ],
  bootstrap:    [ SmartSearch ]  
})
export class AppModule { }
