import { Libro } from './Libro';
import { BibliotecaMethods } from '../interfaces/Libro';

export class Biblioteca implements BibliotecaMethods {
    private libros: Array<Libro> = [];

    private generarId () {
        const ids = this.libros.map(libro => libro.obtenerLibro.id);
        if (!ids.length) {
            ids.push(0);
        }
        return Math.max(...ids) + 1;
    }

    agregarLibro (libro: Libro) {
        libro.modificarIdLibro(this.generarId());
        this.libros.push(libro);
    }

    get obtenerLibros (): Array<Libro> {
        return this.libros;
    }

    get obtenerLibrosDisponibles (): Array<Libro> {
        return this.libros.filter(libro => libro.estaDisponible);
    }

    get obtenerLibrosNoDisponibles (): Array<Libro> {
        return this.libros.filter(libro => !libro.estaDisponible);
    }

    modificarDisponibilidadDelLibro (id: number): string {
        // sale como resulado "disponible" "no disponible"
        return this.libros.filter(libro => libro.obtenerLibro.id === id)[0].modificarDisponibilidad();
    }
}
