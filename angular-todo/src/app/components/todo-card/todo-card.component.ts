import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {

  @Input() todoName:string = ''
  @Input() todoDuration: string = ''
  @Input() todoIsCompleted: boolean = false


  // remove(id:number){
  //   this.todos
  // }

}
