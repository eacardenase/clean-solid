// Refactorizando los parametros de las clases

type Gender = 'M' | 'F';

interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
}

class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDate }: PersonProps) {
        this.birthDate = birthDate;
        this.gender = gender;
        this.name = name;
    }
}

interface UserProps extends PersonProps {
    email: string;
    role: string;
}

class User extends Person {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birthDate }: UserProps) {
        super({ name, gender, birthDate });
        this.email = email;
        this.role = role;
        this.lastAccess = new Date();
    }

    public checkCredentials(): boolean {
        return true;
    }
}

interface UserSettingsProps extends UserProps {
    lastOpenedFolder: string;
    workingDirectory: string;
}

class UserSettings extends User {
    public lastOpenedFolder: string;
    public workingDirectory: string;

    constructor({
        workingDirectory,
        lastOpenedFolder,
        email,
        role,
        name,
        gender,
        birthDate,
    }: UserSettingsProps) {
        super({ email, role, name, gender, birthDate });
        this.workingDirectory = workingDirectory;
        this.lastOpenedFolder = lastOpenedFolder;
    }
}

const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenedFolder: '/home',
    email: 'eacardenase@gmail.com',
    role: 'admin',
    name: 'Edwin Cardenas',
    gender: 'M',
    birthDate: new Date('1996-03-20'),
});

console.log({
    userSettings,
});

export {};
