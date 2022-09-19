// Aplicando el principio de responsabilidad unica
// Priorizando la composicion sobre la herencia

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

interface UserProps {
    email: string;
    role: string;
}

class User implements UserProps {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
        this.email = email;
        this.role = role;
        this.lastAccess = new Date();
    }

    public checkCredentials(): boolean {
        return true;
    }
}

interface SettingsProps {
    lastOpenedFolder: string;
    workingDirectory: string;
}

class Settings implements SettingsProps {
    constructor(
        public lastOpenedFolder: string,
        public workingDirectory: string
    ) {}
}

interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastOpenedFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
}

class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
        name,
        gender,
        birthDate,
        email,
        role,
        lastOpenedFolder,
        workingDirectory,
    }: UserSettingsProps) {
        this.person = new Person({
            name,
            gender,
            birthDate,
        });
        this.user = new User({
            email,
            role,
        });
        this.settings = new Settings(lastOpenedFolder, workingDirectory);
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
console.log(userSettings.user.checkCredentials());

export {};
