interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
}

class Tucan implements Bird {
    public fly(): void {}
    public eat(): void {}
    public run(): void {}
    public swim(): void {}
}

class Hummingbird implements Bird {
    public fly(): void {}
    public eat(): void {}
    public run(): void {}
    public swim(): void {}
}

class Ostrich implements Bird {
    public fly(): void {
        throw new Error('Esta ave no vuela');
    }
    public eat(): void {}
    public run(): void {}
    public swim(): void {}
}

class Penguin implements Bird {
    public fly(): void {
        throw new Error('Esta ave no vuela');
    }
    public eat(): void {}
    public run(): void {}
    public swim(): void {}
}

export {};
