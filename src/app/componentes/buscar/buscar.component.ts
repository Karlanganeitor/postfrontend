import { Component, OnInit } from '@angular/core';
import { DespachoServiceService } from 'src/app/services/despacho-service.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public personas: Array <any> = []

  
  constructor(
    private personaService: PersonasService, private despachoService:  DespachoServiceService
  ) { 

    this.personaService.getPersonas().subscribe((resp: any)=>{
      console.log(resp)
      this.personas = resp
      
    })

   
    
    
    
  }
  agregarFav(){
    console.log(this.personaService);
    this.despachoService.disparadorDeFav.emit({data:this.personas})
  }

















  filterPost = '';
  posts = [
    {
      "id": 1,
      "title": "Post One",
      "date": "02/04/2019"
    },
    {
      "id": 2,
      "title": "Post Two",
      "date": "11/04/2019"
    },
    {
      "id": 3,
      "title": "Post Three",
      "date": "30/01/2019"
    },
    {
      "id": 4,
      "title": "Post Four",
      "date": "30/05/2019"
    },
    {
      "id": 5,
      "title": "Post Five",
      "date": "30/04/2019"
    }
  ];

  ngOnInit(): void {
  }

}
