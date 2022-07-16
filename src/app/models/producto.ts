export class Producto {
    id?: number;
    nombre: string;
    precio: number;
    fecha: string;
    nomapp: string;
    direccion: string;
    detalles: string;

    //agregar mas items

    constructor(nombre: string, precio: number, fecha: string, nomapp: string, direccion: string, detalles: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.fecha = fecha;
        this.nomapp = nomapp;
        this.direccion = direccion;
        this.detalles = detalles;
    }
}