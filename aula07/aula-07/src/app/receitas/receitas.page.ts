import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  receitas: any[] = [];
  constructor(private route: Router,
              private api: ApiService) { }

  ngOnInit() {
    this.api.obter('receitas')
    .subscribe( result => this.receitas = result);
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
