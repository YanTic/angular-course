import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  // Como el app.component.html es tan corto, solo una linea, no es necesario
  // hacer referaencia un archivo, solo con mandar lo que tiene el archivo
  // como string el proyecto ya lo entenderá correctamente
  // templateUrl: './app.component.html',

  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-store';
}
