export interface MascotaMethods {
    alimentar: () => { mensaje: string; hambre: number };
    jugar: () => { mensaje: string; vida: number; hambre: number };
    cuidar: () => { mensaje: string; vida: number; hambre: number; felicidad: number };
    saberTipoMascota: string;
    saberSubtipoMascota: string;
    saberNombreMascota: string;
    saberHambreMascota: number;
}
