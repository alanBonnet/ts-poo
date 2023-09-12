import { Figure } from './Figures';

export class GeometryForm {
    constructor (private figure: Figure) {}

    area () {
        return this.figure.getArea();
    }
}
