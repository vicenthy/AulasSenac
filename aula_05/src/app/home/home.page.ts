import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = '';
  todo = [
            { title: 'Titulo', status: false},
            { title: 'Titulo 02', status: false},
          ];

  constructor() {}


  adicionar(){
    this.todo.push({title: this.title, status: false});
    console.log(this.title);
  }
  delete(item){
    this.todo = this.todo.filter(a => a.title !== item.title);

  }



}
