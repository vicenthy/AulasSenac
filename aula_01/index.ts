class Cliente{
    nome? = "";
    email? = "";
constructor(nome?: string, email?: string ){
this.nome = nome;
this.email = email
}
mostrarDados(){
    console.log(`name: ${this.nome} email: ${this.email}`) 
    }
}
//const cliente1 = new Cliente("Atila", "email@email");
//cliente1.mostrarDados();
//const cliente2 = new Cliente();
//cliente2.mostrarDados();

const nome = prompt("Digite seu nome: ") + "";
const email = prompt("Digite seu email: ") + "";
const cliente1 = new Cliente(nome, email);
cliente1.mostrarDados();


