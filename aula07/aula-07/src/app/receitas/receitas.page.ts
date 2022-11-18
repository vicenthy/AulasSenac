import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  editar(){
    alert('teste');
  }
  excluir(){
    alert('teste excluir');
  }

  nova(){
    this.route.navigate(['/receitas/new']);
  }
}
