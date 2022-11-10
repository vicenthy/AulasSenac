import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos = [
    { id: 1, title: 'Tarefa 01', description: 'Descrição de teste 01', isDone: false},
    { id: 2, title: 'Tarefa 02', description: 'Descrição de teste 02', isDone: true},
    { id: 3, title: 'Tarefa 03', description: 'Descrição de teste 03', isDone: false},
    { id: 4, title: 'Tarefa 04', description: 'Descrição de teste 04', isDone: true}
]

  constructor() { }
}
