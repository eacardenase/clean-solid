export abstract class Vehicle {
    constructor(protected numberOfSeats: number) {}

    public abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
    public getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {
    public getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {
    public getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {
    public getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
