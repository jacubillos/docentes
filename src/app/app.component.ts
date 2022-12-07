import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema de Gestión de Información de Estudiantes y Docentes';

people = [
  {name:'Jesus', position: 'Profesor', identy: '123456', email: 'jac@gmail.com', phone: '23232'},
  {name:'Alberto', position: 'Estudiante', identy: '123456', email: 'jac@gmail.com', phone: '23232'},
];

model:any = {};
msg:string = '';

addPeople():void{
  this.people.push(this.model);
  this.model = {};
  this.msg = 'Persona añadida'
}

}

