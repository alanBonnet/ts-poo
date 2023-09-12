import { LibroMethods, LibroInit } from '../interfaces/Libro';

export class Libro implements LibroMethods {
    private id: number = 0;
    private titulo: string = '';
    private autor: string = '';
    private disponibilidad: boolean = false;
    private modificadoId: boolean = false;
    constructor ({ titulo, autor, disponibilidad }: LibroInit) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponibilidad = disponibilidad.toLocaleLowerCase() === 'disponible';
    }

    get obtenerLibro () {
        return {
            id: this.id,
            autor: this.autor,
            disponibilidad: this.disponibilidad,
            titulo: this.titulo
        };
    }

    get estaDisponible () {
        return this.disponibilidad;
    }

    modificarDisponibilidad (): string {
        this.disponibilidad = !this.disponibilidad;
        return this.disponibilidad ? 'Disponible' : 'No disponible';
    }

    modificarIdLibro (id: number): string {
        if (!this.modificadoId) {
            this.id = id;
            this.modificadoId = true;
            return 'Modificado correctamente';
        }
        return 'No se puede editar el id';
    }
}
