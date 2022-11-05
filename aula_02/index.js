const valorResultado = 
function () { return document.getElementById('resultado').innerText;} 


// funções de calculo
function resultado(){
    if(valorResultado()){
        if(valorResultado().includes('0') && valorResultado().includes('/')){
            alert('divisão por zero');
            limpar();
            return;
        }if(Array.from(valorResultado()).every(a => isNaN(a)) ){
            alert('nenhuma número encontrado');
            limpar();
            return;
        }
        document.getElementById('resultado').innerText = eval(valorResultado());
        console.log('resultado: ' + valorResultado());     
    }else{
        alert('nenhum valor digitado')
    }
}

function calculo(operacao){
    document.getElementById('resultado').innerHTML = valorResultado() + operacao;
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

//numeros
function numero(numero){
    document.getElementById('resultado').innerHTML = valorResultado() + numero;
}



