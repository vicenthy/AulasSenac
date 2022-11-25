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
  }

  ionViewWillEnter(){
    this.api.obter('receitas')
    .subscribe( result => this.receitas = result);
  }

  search(event: any){
    const value = event.detail.value;
    this.api.obter(`receitas?descricao_like=${value}`)
    .subscribe(result => this.receitas = result);
  }
  editar(id: number){
   this.route.navigate([`/receitas/edit/${id}`]);
  }

  excluir(id: number){
    this.api.excluir(`receitas/${id}`)
    .subscribe(() => {
      this.api.obter('receitas')
      .subscribe(result => this.receitas = result);
    })

  }

  nova(){
    this.route.navigate(['/receitas/new']);
  }
}
