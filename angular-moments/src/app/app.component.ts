import { Component } from '@angular/core';
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

  addTodo():void{
    this.showTodo = !this.showTodo;
  }

  // title = 'angular-moments';
}
