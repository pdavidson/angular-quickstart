import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from 'rxjs';

import { BBComCriteriaWrapper, BBComResultWrapper, SmartSearchCriteria } from './smart-search-model'

@Injectable()
export class SmartSearchService {

    private url = "/exercises/smart/search"

    constructor(private http: Http) {}

    getCriteria(): Observable<SmartSearchCriteria> {
        return this.http.get(this.url)
                    .map((r: Response) => r)
                    .map(it => it.json())                    
                    .map(it => it as BBComCriteriaWrapper)
                    .map(it => it.data)
                    .do(
                        function (x)   { console.log('Do Next:', x); },
                        function (err) { console.log('Do Error:', err); },
                        function ()    { console.log('Do Completed'); }
                    )                    
    }

search(criteria: SmartSearchCriteria): Observable<Array<Object>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.url, JSON.stringify(criteria), options)
                    .map((r: Response) => r)
                    .map(it => it.json())
                    .map(it => it.data)                                    
                    .do(
                        function (x)   { console.log('Do Next:', x); },
                        function (err) { console.log('Do Error:', err); },
                        function ()    { console.log('Do Completed'); }
                    )  
}

}


