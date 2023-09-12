/* eslint-disable semi */
export interface Figure {
    getArea(): number;
}
export class Square implements Figure {
    constructor (private side: number) {}

    getArea (): number {
        return this.side ** 2;
    }
}

export class Circle {
    constructor (private radius: number) {}

    getArea () {
        return (this.radius * Math.PI) / 2;
    }
}

export class Triangle implements Figure {
    constructor (private width: number, private height: number) {}

    getArea (): number {
        return (this.width * this.height) / 2;
    }
}
