import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'todo-app';
  todos: string[] = [];
  newToDo: string = '';
  addToDo(){
    this.todos.push(this.newToDo);
    this.newToDo = '';
  }
  deleteToDo(index: number){
    this.todos.splice(index,1);
  }
}
