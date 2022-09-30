import './style.css';
import './solid/05-dependency-a';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;

// Dependecy Inyection Example

// class ExternalService {
//     doExternalTask() {
//         console.log('Doing task...');
//     }
// }

// class UseCase {
//     constructor(private externalService: ExternalService) {}

//     public doSomething() {
//         this.externalService.doExternalTask();
//     }
// }
