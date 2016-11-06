import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SmartSearchService } from './smart-search.service';
import { SmartSearchCriteria } from './smart-search-criteria';


@Component({ 
  selector: 'smart-search',
  providers: [ SmartSearchService ],  
  template: `
    <div>
      <div class="title-muscles">Muscles</div>
      <ul>
      <li *ngFor="let muscle of criteria?.muscles" class="selectable">{{muscle}}</li>
      </ul>
      <div class="title-equipment">Equipment</div>
      <ul>
        <li *ngFor="let equipment of criteria?.equipment" class="selectable">{{equipment}}</li>
      </ul>
      <div class="title-exerciseType">Exercise Type</div>
      <ul>
        <li *ngFor="let et of criteria?.exerciseType" class="selectable">{{et}}</li>
      </ul>
    </div>  
  `
})
export class SmartSearch implements OnInit {
  
  public criteria: SmartSearchCriteria

  constructor(private smartSearchService: SmartSearchService) {}  

  ngOnInit(): void {
    this.smartSearchService.getCriteria()
      .subscribe(
        data => { 
          console.log("Got data ", data)
          this.criteria = data          
          },
        err => console.error(err),
        () => console.log('done')
      );
  }

 }