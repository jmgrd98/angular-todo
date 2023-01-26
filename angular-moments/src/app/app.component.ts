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
    name: 'Fazer coco',
    duration: '1h'
  }

  showTodo = false;

  addTodo(){
    this.showTodo = true;
  }

  // title = 'angular-moments';
}
