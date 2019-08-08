import { Component } from '@angular/core';
import { JSONProviderService } from './jsonprovider.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clase 4 Http';

  response: any;
  cargando = false;

  constructor(private jsonProvider: JSONProviderService){

  }

  onButtonClick(){
      this.jsonProvider.getData$().subscribe((data) => {
        this.response = data;
      })
  }


}
