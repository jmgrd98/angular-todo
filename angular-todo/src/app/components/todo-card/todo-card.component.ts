import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {

  @Input() todo:any = {
    todoName: '',
    todoDuration: '',
    todoIsCompleted: false
  }

  @Input() todoName:string = ''
  @Input() todoDuration: string = ''
  @Input() todoIsCompleted: boolean = false

  @Output() delete:any = new EventEmitter()

  onDelete(){
    this.delete.emit(todo)
  }


  // remove(id:number){
  //   this.todos
  // }

}
