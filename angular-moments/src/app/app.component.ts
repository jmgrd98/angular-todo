import { Component } from '@angular/core';
import { Todo } from 'src/types/Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'João'

  userData = {
    email: 'jmgrd98@gmail.com',
    role: 'Web dev'
  }

  todo = {
    name: 'Fazer cocô',
    duration: '1h'
  }

  showTodo:boolean = false;

  todos: Todo[] = []
  newTodo: string

  addTodo():void{
    if(this.newTodo){
      let todo = new Todo()
      todo.name = this.newTodo
      todo.isCompleted = true
      this.todos.push(todo)
      this.newTodo = ''
    }
    else{
      alert('Please enter todo!')
    }
  }

  // title = 'angular-moments';
}
