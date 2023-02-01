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

  show: boolean = true

  onDelete(){
    this.delete.emit(this.todo)
    this.show = false
  }


  // remove(id:number){
  //   this.todos
  // }

}
