import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 
  //este es un filtro para buscar la boleta en donde le indico que cada campo ingresado sera tomado con letras menores para que asi la busqueda sea mas rapida
  transform(value: any, arg: any): any {
    const resultPost = [];
    for (const persona of value) {
      if (persona.nroBoleta.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPost.push(persona);
        console.log("esteesellog",persona.productos?.nombreProducto)

      };
    };
    return resultPost;
  }

}
