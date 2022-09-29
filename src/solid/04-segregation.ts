interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface SwimmerBird {
    swim(): void;
}

interface RunningBird {
    run(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly(): number {
        return new Date().getTime();
    }
    public eat(): void {}
}

class Hummingbird implements Bird, FlyingBird {
    public fly(): number {
        return new Date().getTime();
    }
    public eat(): void {}
}

class Ostrich implements Bird, RunningBird {
    public eat(): void {}
    public run(): void {}
}

class Penguin implements Bird, SwimmerBird {
    public eat(): void {}
    public swim(): void {}
}

export {};
