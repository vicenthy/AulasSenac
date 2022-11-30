// //TypeScript: tipagem estática 
// // Number
// let numero: number;
// let numero2 = 44.00;
// // String
// let texto = "um texto qualquer";
// let texto2 = texto + "outro texto";
// let texto3 = `Sua compra no valor R$:3500,00 do iphone x foi feita com sucesso`;
// let valor = 3500
// let celular = "iphone X"
// let texto4 = `Sua compra no valor R$:${valor} do ${celular} foi feita com sucesso`;
// let texto5 = "Sua compra no valor R$:"+valor+" do "+celular+" foi feita com sucesso";
// // Boolean

// let isPessoaJuridica = true;

//  function isPessoaFisica(documento: string):boolean {
//     if(documento.length === 11){
//         return true;
//     }if(documento.length === 14){
//         return false;
//     }
//     return false;
//  }
//  // Any
// let mostro: any;
// mostro = '';
// mostro = 123123;
// mostro = false;
// // Object
// let obj : { nome: '', idade: 50}
// // Array

// let pessoa: Array<any>;
// let pessoa2: [];

// let numeros = [1,3,4,5,6,7,8];
// numeros[0];

// numeros.forEach((value) => {
//     value
// });

// for( let value of numeros){
//     value
// }

// for(let i =0; i++; numeros.length){
//         numeros[i]
// }


// function nomeDaFuncao(parametros:any) : any{
//     console.log('minha função')
// }

 

// class ClasseBase{
//     nome: string;

//     constructor(){
//     }
//     print(msg:string){
//         console.log(msg);
//     }
// }

// class Cliente extends ClasseBase{
//     cpf: string;

//     print(msg:string){
//         console.log("Mensagem: "+msg + "E mpresa:" + this.cpf );
//     }
// }

// class Empresa extends ClasseBase implements OnPagamento{
    
//     pagar() {
//         throw new Error("Method not implemented.");
//     }

//     cnpj: string;

//     print(msg:string){
//         console.log("Mensagem: "+msg + "E mpresa:" + this.cnpj );
//     }
// }

// interface OnPagamento{
//     pagar():any;
// }


// abstract class OnReceber{
    
//    abstract receber():any;

//    getSalario(){
//     this.receber();
//    }
// }



// let classbase = new ClasseBase();
// let classecliente:Cliente = new Cliente();
// let classEmpresa: OnPagamento = new Empresa();


// Criar uma classe Cliente, essa 
// classe deve ter os seguintes atributos
// nome, email, telefone, ultimo pagamento
// método para verificar se ele esta adimplente 


// Criar uma class Aluno que herda de Cliente 
// com os seguintes atributos
// matricula, curso, nota1, nota2, nota3
// método para verificar se o aluno 
// está aprovado(média maior que 6) e adimplente

 

interface BaseDeCalculo{
    de:number;
    ate: number;
}

interface TabelaIRRF{
    basecalculo: BaseDeCalculo
    aliquota: number;
    deducao: number;
}

var tabelaVigencia: Array<TabelaIRRF> = [
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


function calcularImposto(valorBruto: number){
    let valorLiquido = 0;

    //percorre cada item da minha tabela de IRRF
   for( let linhaDoCalculo of tabelaVigencia){
            //verifica a base de calculo para encontrar a aliquota
        if(valorBruto >= linhaDoCalculo.basecalculo.de 
            && valorBruto <= linhaDoCalculo.basecalculo.ate){
            // calculo do imposto de renda
        const valorImposto = (valorBruto * linhaDoCalculo.aliquota);
        valorLiquido = (valorImposto -  linhaDoCalculo.deducao);
             
     console.log(`Valor do IR: ${valorLiquido}, 
                  Aliquota: ${linhaDoCalculo.aliquota *100}`);
                  return;
        }
   }

}

calcularImposto(3000);
calcularImposto(1500);
calcularImposto(2000);
calcularImposto(30000);


