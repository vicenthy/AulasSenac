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
var tabelaVigencia = [
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
function calcularImposto(valorBruto) {
    var valorLiquido = 0;
    //percorre cada item da minha tabela de IRRF
    for (var _i = 0, tabelaVigencia_1 = tabelaVigencia; _i < tabelaVigencia_1.length; _i++) {
        var linhaDoCalculo = tabelaVigencia_1[_i];
        //verifica a base de calculo para encontrar a aliquota
        if (valorBruto >= linhaDoCalculo.basecalculo.de
            && valorBruto <= linhaDoCalculo.basecalculo.ate) {
            var valorImposto = (valorBruto * linhaDoCalculo.aliquota);
            valorLiquido = (valorImposto - linhaDoCalculo.deducao);
            console.log("Valor do IR: ".concat(valorLiquido, ", \n                  Aliquota: ").concat(linhaDoCalculo.aliquota * 100));
            return;
        }
    }
}
calcularImposto(3000);
calcularImposto(1500);
calcularImposto(2000);
calcularImposto(30000);
