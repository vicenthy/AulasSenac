import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'pie-chart' },
    { title: 'Despesas', url: '/despesas', icon: 'cash' },
    { title: 'Receitas', url: '/receitas', icon: 'wallet' },
    { title: 'Categorias', url: '/categorias', icon: 'pricetags' },
  ];
  constructor() {}
}
