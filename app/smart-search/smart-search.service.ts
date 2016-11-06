import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from 'rxjs';

import { BBComWrapper, SmartSearchCriteria } from './smart-search-criteria'

@Injectable()
export class SmartSearchService {

    private url = "/exercises/smart/search"

    constructor(private http: Http) {}

    getCriteria(): Observable<SmartSearchCriteria> {
        return this.http.get(this.url)
                    .map((r: Response) => r)
                    .map(it => it.json())                    
                    .map(it => it as BBComWrapper)
                    .map(it => it.data)
                    .do(
                        function (x)   { console.log('Do Next:', x); },
                        function (err) { console.log('Do Error:', err); },
                        function ()    { console.log('Do Completed'); }
                    )
    }
}

