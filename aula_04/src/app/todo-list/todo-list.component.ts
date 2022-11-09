import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos = [
    { id: 1, title: 'Tarefa 01', description: 'Descrição de teste 01'},
    { id: 2, title: 'Tarefa 02', description: 'Descrição de teste 02'},
    { id: 3, title: 'Tarefa 03', description: 'Descrição de teste 03'},
    { id: 4, title: 'Tarefa 04', description: 'Descrição de teste 04'}
]
  constructor(private route: Router ) { }

  ngOnInit(): void {
  }

  edit(id: number){
    this.route.navigate([`/edit/${id}`]);
  }

  new(){
    this.route.navigate(['/new']);
  }




}
