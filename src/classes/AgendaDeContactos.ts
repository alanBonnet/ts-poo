import { Contacto } from './Contacto';
import { AgendaDeContactosMethods } from '../interfaces/Contacto';

export class AgendaDeContactos implements AgendaDeContactosMethods {
    private agenda: Array<Contacto> = [];

    agregarContacto (contacto: Contacto): void {
        this.agenda.push(contacto);
    }

    get saberContactos (): Array<Contacto> {
        return this.agenda;
    }

    eliminarContacto (nroContacto: number): void {
        this.agenda = this.agenda.filter(contacto => contacto.obtenerNumero !== nroContacto);
    }

    buscarContactoPorNombre (nombre: string): Array<Contacto> {
        return this.agenda.filter(contacto => contacto.obtenerNombre.includes(nombre));
    }
}
