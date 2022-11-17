import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo:any = {};
  constructor(private data: DataService,
              private route: Router,
              private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id =  parseInt(this.activedRoute.snapshot.params['id']);
    this.todo = this.data.todos.find(a => a.id === id );
  }

  salvar(){
    this.data.salvar(this.todo);
    this.route.navigate(['']);
  }
}
