export class contabilidad{
    id?: number;
    nfactura: string;
    Precio: number;
    cantidad: number;
    objeto: string;

    constructor(nfactura: string,Precio : number, cantidad: number, objeto: string){
        this.nfactura = nfactura;
        this.Precio = Precio;
        this.cantidad = cantidad;
        this.objeto = objeto;

    }
}