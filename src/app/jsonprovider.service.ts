import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JSONRequestService } from './jsonrequest.service';


@Injectable({
  providedIn: 'root'
})
export class JSONProviderService {
  private response;

  constructor(private jsonRequestService: JSONRequestService) { }

  requestData(){
    this.jsonRequestService.getPosts().subscribe((data) => {
      this.response = data;
    });
  }

  getData$(): Observable<any> { ///El que lo esta observando 
    //va a recibir un objeto de tipo any (any es cualquier cosa)
    if(!this.response){
       this.requestData();
      return of(this.response);
    }else{
      return of(this.response);// of es un objeto que devuelve lo que le pasas por parametro 
                                //crea un observable con la respuesta que esta dentro del parentesis.
    }

  }
}
