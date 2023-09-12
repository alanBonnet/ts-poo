import { MascotaMethods } from '../interfaces/Mascota';

export class Mascota implements MascotaMethods {
    private nombre: string = '';
    private vida: number = 100;
    private hambre: number = 100;
    private felicidad: number = 100;
    private subtipoMascota: string = '';
    private tipoMascota: string = '';
    constructor ({
        nombre,
        subTipoMascota,
        tipoMascota
    }: {
        nombre: string;
        subTipoMascota: string;
        tipoMascota: string;
    }) {
        this.nombre = nombre;
        this.subtipoMascota = subTipoMascota;
        this.tipoMascota = tipoMascota;
    }

    alimentar (): { mensaje: string; hambre: number } {
        if (this.hambre <= 80 && this.vida >= 80) {
            this.hambre += 20;
            this.subirFelicidad();
            return {
                mensaje: `Alimentaste a ${this.nombre}!`,
                hambre: this.hambre
            };
        }
        if (this.hambre >= 0 && this.vida <= 81) {
            this.vida += 20;
            this.subirFelicidad();
            return {
                mensaje: `Alimentaste a ${this.nombre} y ha recuperado algo de salud`,
                hambre: this.hambre
            };
        }
        return {
            mensaje: `Tu mascota ${this.nombre} ya está llena!`,
            hambre: this.hambre
        };
    }

    jugar (): { mensaje: string; hambre: number; vida: number } {
        if (this.vida > 0 && this.vida <= 20) {
            this.bajarFelicidad();
            return {
                mensaje: 'No quiere jugar, alimentalo!',
                vida: this.vida,
                hambre: this.hambre
            };
        }
        if (this.hambre <= 0) {
            this.vida -= 10;
            this.bajarFelicidad();
            return {
                mensaje: 'Parece que tu mascota tiene hambre!',
                vida: this.vida,
                hambre: this.hambre
            };
        }
        this.hambre -= 20;
        this.subirFelicidad();
        return {
            mensaje: `Tu mascota ${this.nombre} está jugando!\n...Que lindo se ve!`,
            vida: this.vida,
            hambre: this.hambre
        };
    }

    cuidar (): {
        mensaje: string;
        hambre: number;
        vida: number;
        felicidad: number;
    } {
        if (this.vida <= 80 || (this.felicidad <= 60 && this.hambre <= 20)) {
            return {
                mensaje: `Tu mascota ${this.nombre} no está bien cuidada.`,
                vida: this.vida,
                hambre: this.hambre,
                felicidad: this.felicidad
            };
        }
        return {
            mensaje: `Tu mascota ${this.nombre} está bien cuidada.`,
            vida: this.vida,
            hambre: this.hambre,
            felicidad: this.felicidad
        };
    }

    private subirFelicidad (): number {
        if (this.felicidad > 90) {
            return this.felicidad;
        }
        if (this.felicidad >= 80 && this.felicidad <= 90) {
            this.felicidad += 10;
            return this.felicidad;
        }
        this.felicidad += 20;
        return this.felicidad;
    }

    private bajarFelicidad (): number {
        if (this.felicidad <= 10) {
            return this.felicidad;
        }
        if (this.felicidad >= 80 && this.felicidad <= 90) {
            this.felicidad -= 10;
            return this.felicidad;
        }
        this.felicidad -= 15;
        return this.felicidad;
    }

    get saberTipoMascota () {
        return this.tipoMascota;
    }

    get saberSubtipoMascota () {
        return this.subtipoMascota;
    }

    get saberNombreMascota () {
        return this.nombre;
    }

    get saberHambreMascota () {
        return this.hambre;
    }
}
