import { Component, Input } from '@angular/core';

@Component({ 
  selector: 'smart-search-button',  
  template: `          
    <label class="btn btn-primary active" (click)="onClickMe()">
        <input type="checkbox" checked autocomplete="off" value="{{val}}" name="{{name}}"> {{val}}
    </label>            
  `
})
export class SmartSearchButton {
    @Input() name: string;
    @Input() val: string;

    onClickMe(el) {
        
    }

}


