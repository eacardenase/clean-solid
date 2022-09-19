type Gender = 'M' | 'F';

// No aplicando el principio de responsabilidad unica

class Person {
    constructor(
        public name: string,
        public gender: Gender,
        public birthDate: Date
    ) {}
}

class User extends Person {
    private lastAccess: Date;

    constructor(
        public email: string,
        public role: string,
        name: string,
        gender: Gender,
        birthDate: Date
    ) {
        super(name, gender, birthDate);
        this.lastAccess = new Date();
    }

    public checkCredentials(): boolean {
        return true;
    }
}

class UserSettings extends User {
    constructor(
        public workingDirectory: string,
        public lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthDate: Date
    ) {
        super(email, role, name, gender, birthDate);
    }
}

const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'eacardenase@gmail.com',
    'admin',
    'Edwin Cardenas',
    'M',
    new Date('1996-03-20')
);

console.log({
    userSettings,
});

export {};
