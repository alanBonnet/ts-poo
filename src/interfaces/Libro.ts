import { Libro } from '../classes/Libro';

export interface LibroMethods {
    obtenerLibro: { id: number; autor: string; disponibilidad: boolean; titulo: string };
    estaDisponible: boolean;
    modificarDisponibilidad: () => string;
    modificarIdLibro: (id: number) => string;
}
export interface LibroInit {
    titulo: string;
    autor: string;
    disponibilidad: string;
}
export interface BibliotecaMethods {
    agregarLibro: (libro: Libro) => void;
    obtenerLibros: Array<Libro>;
    obtenerLibrosDisponibles: Array<Libro>;
    obtenerLibrosNoDisponibles: Array<Libro>;
    modificarDisponibilidadDelLibro: (id: number) => void;
}
