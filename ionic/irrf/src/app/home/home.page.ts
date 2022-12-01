import { Component } from '@angular/core';

interface BaseDeCalculo{
  de:number;
  ate: number;
}

interface TabelaIRRF{
  basecalculo: BaseDeCalculo
  aliquota: number;
  deducao: number;
}

const tabelaVigencia: Array<TabelaIRRF> = [
  {
      aliquota: 0,
      basecalculo: {
          de: 0,
          ate: 1903.98
      },
      deducao: 0
  },
  {
      aliquota: 0.075,
      basecalculo: {
          de: 1903.99,
          ate: 2826.65
      },
      deducao: 142.80
  },
  {
      aliquota: 0.15,
      basecalculo: {
          de: 2826.66,
          ate: 3751.05
      },
      deducao: 354.80
  },
  {
      aliquota: 0.225,
      basecalculo: {
          de: 3751.06,
          ate: 4664.68
      },
      deducao: 636.13
  },
  {
      aliquota: 0.275,
      basecalculo: {
          de: 4664.68,
          ate: Infinity
      },
      deducao: 869.36
  }

];


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valorBruto = 0;
  resultado = "";
  constructor() {}


calcularImposto(){
  let valorLiquido = 0;
  //percorre cada item da minha tabela de IRRF
 for( let linhaDoCalculo of tabelaVigencia){
          //verifica a base de calculo para encontrar a aliquota
      if(this.valorBruto >= linhaDoCalculo.basecalculo.de
          && this.valorBruto <= linhaDoCalculo.basecalculo.ate){
          // calculo do imposto de renda
      const valorImposto = (this.valorBruto * linhaDoCalculo.aliquota);
      valorLiquido = (valorImposto -  linhaDoCalculo.deducao);

   this.resultado = `Valor do IR: ${valorLiquido.toFixed(2)},
                Aliquota: ${(linhaDoCalculo.aliquota * 100).toFixed(2
                  )}`;
                return;
      }
 }

}
}
