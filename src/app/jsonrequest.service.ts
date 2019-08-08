import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONRequestService {

  URL = "http://jsonplaceholder.typicode.com/todos/1";
  
  constructor(private http: HttpClient) { }

  getPosts() : Observable<any>{
    return this.http.get(this.URL, {observe: 'response'});
  }
  

}
