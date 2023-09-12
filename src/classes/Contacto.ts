import { ContactoInit, ContactoMethods } from '../interfaces/Contacto';

export class Contacto implements ContactoMethods {
    private nombre: string = '';
    private apellidos: string = '';
    private numero: number = 0;
    constructor ({ nombre, apellidos, numero }: ContactoInit) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.numero = numero;
    }

    get obtenerNombre () {
        return this.nombre;
    }

    get obtenerApellidos () {
        return this.apellidos;
    }

    get obtenerNumero () {
        return this.numero;
    }

    modificarNombre (nombre: string) {
        this.nombre = nombre;
    }

    modificarApellidos (apellidos: string) {
        this.apellidos = apellidos;
    }

    modificarNumero (numero: number) {
        this.numero = numero;
    }
}
