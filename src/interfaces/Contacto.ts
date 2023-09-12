import { Contacto } from '../classes/Contacto';

export interface ContactoInit {
    nombre: string;
    apellidos: string;
    numero: number;
}
export interface ContactoMethods {
    obtenerNombre: string;
    obtenerApellidos: string;
    obtenerNumero: number;
    modificarNombre: (nombre: string) => void;
    modificarApellidos: (apellidos: string) => void;
    modificarNumero: (numero: number) => void;
}

export interface AgendaDeContactosMethods {
    agregarContacto: (contacto: Contacto) => void;
    saberContactos: Array<Contacto>;
    eliminarContacto: (nroContacto: number) => void;
    buscarContactoPorNombre: (nombre: string) => Array<Contacto>;
}
