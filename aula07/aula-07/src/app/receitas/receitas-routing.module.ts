import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitasPage } from './receitas.page';
import { FormComponent } from '../receitas/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: ReceitasPage
  },
  {
    path: 'new',
    component: FormComponent
  },
  {
    path: 'edit/:id',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitasPageRoutingModule {}
