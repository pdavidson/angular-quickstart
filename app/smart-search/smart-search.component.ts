import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SmartSearchService } from './smart-search.service';
import { SmartSearchCriteria } from './smart-search-criteria';
import { SmartSearchButton } from './button.component'

@Component({ 
  selector: 'smart-search',
  providers: [ SmartSearchService ],  
  template: `
    
    <div class="row">
      <h2>Muscles</h2>
      <div class="btn-group">
        <smart-search-button *ngFor="let muscle of criteria?.muscles"
          [name]="'muscle'"
          [val]="muscle">
        </smart-search-button>              
      </div>      
    </div>

    <div class="row">
      <h2>Equipment</h2>
      <div class="btn-group">
          <smart-search-button *ngFor="let equipment of criteria?.equipment"
            [name]="'equipment'"
            [val]="equipment">
          </smart-search-button>              
      </div>
    </div>

    <div class="row">
      <h2>Exercise Type</h2>
      <div class="btn-group">
          <smart-search-button *ngFor="let exerciseType of criteria?.exerciseType"
            [name]="'exerciseType'"
            [val]="exerciseType">
          </smart-search-button>              
      </div>
    </div>
    
    <div class="row">
      <label>Show Exercises Per Muscle Group <input type="number" value="{{criteria?.maxExercisesPerMuscle}}"/></label>    
    </div>

    <div class="row">
      <button type="button" class="btn btn-primary" (click)="search()">Search</button>
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

  search() {
    console.log("Clicked Search")
  }

 }