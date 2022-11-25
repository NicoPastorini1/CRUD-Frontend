export class Producto{
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    precio: number;

    constructor(nombre: string, categoria: string, precio: number, ubicacion: string){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
}