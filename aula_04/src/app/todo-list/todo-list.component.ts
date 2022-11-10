import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

todos: any[] = [];
  constructor(private route: Router,
              private data: DataService ) { }

  ngOnInit(): void {
    this.todos = this.data.todos;
  }

  adicionar(){
    this.route.navigate(['/new']);
  }


  excluir(item: any){
    if(confirm('deseja realmente excluir?')){
      this.data.exxluir(item);
      this.todos = this.data.todos;
    }

  }



}
