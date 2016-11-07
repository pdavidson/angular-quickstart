import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SmartSearchService } from './smart-search.service';
import { SmartSearchCriteria } from './smart-search-model';
import { SmartSearchButton } from './button.component';
import { ResultComponent } from './result.component';

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

    <smart-search-result *ngFor="let result of results"
      [exercise]="result">
    </smart-search-result>
  `
})
export class SmartSearch implements OnInit {
  
  public criteria: SmartSearchCriteria
  private query: SmartSearchCriteria
  private results: Array<Object>

  constructor(private smartSearchService: SmartSearchService) {}  

  ngOnInit(): void {
    this.smartSearchService.getCriteria()
      .subscribe(
        data => { 
          console.log("Got data ", data)
          this.criteria = data
          this.query = data
          },
        err => console.error(err),
        () => console.log('done getting criteria')
      );
  }

  search() {
    this.smartSearchService.search(this.criteria)
      .subscribe(
          data => { 
            console.log("Got data ", data)
            this.results = data;
          },
        err => console.error("Error Searching", err),
        () => console.log('done searching')
      )
  }

 }