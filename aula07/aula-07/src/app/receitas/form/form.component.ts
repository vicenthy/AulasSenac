import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DialogService } from '../../dialog.service';

interface Receita{
  id?: number;
  description?: string;
  value?: number;
  dueDate?: any;
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
              private dialog: DialogService) { }

  ngOnInit() {
    this.api.obter('categorias').subscribe( result => this.categorias = result);
  }

  salvar(){
    const categoria = this.categorias.find( x => x.id === this.receita.categoria.id);
    this.receita.categoria = categoria;
    this.api.salvar(this.receita, 'receitas').subscribe(() => {
      this.receita = this.clear();
      this.dialog.showSuccessAlert();
    });
    //console.log(this.receita);
  }

  clear(): Receita{
    return {
      categoria: {},
      dueDate: new Date().toISOString(),
    }
  }

}
