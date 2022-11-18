import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editar(){
    alert('teste');
  }
  excluir(){
    alert('teste excluir');
  }
}
