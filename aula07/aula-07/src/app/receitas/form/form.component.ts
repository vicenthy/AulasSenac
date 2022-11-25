import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { DialogService } from '../../dialog.service';

interface Receita{
  id?: number;
  descricao?: string;
  valor?: number;
  vencimento?: any;
  categoria?: any;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  receita: Receita = { categoria: {} };
  categorias: any[] = [];

  constructor(private api: ApiService,
              private dialog: DialogService,
              private route: Router,
              private activadRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activadRoute.snapshot.params['id'];
    this.api.obter('categorias').subscribe( result => this.categorias = result);
    this.api.obter(`receitas/${id}`)
    .subscribe(result => this.receita = result);
  }

  salvar(){
    const categoria = this.categorias.find( x => x.id === this.receita.categoria.id);
    this.receita.categoria = categoria;
    this.api.salvar(this.receita, 'receitas').subscribe(() => {
      if(this.receita.id){
        this.route.navigate(['/receitas']);
      }
      this.receita = this.clear();
       this.dialog.showSuccessAlert();
    });
    //console.log(this.receita);
  }

  clear(): Receita{
    return {
      categoria: {},
      vencimento: new Date().toISOString(),
    }
  }

}
