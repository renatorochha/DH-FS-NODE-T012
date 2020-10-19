// criação de uma variável com let recebendo valor de uma string
let nome = "Pet Shop NodeJS DH"

// exibindo valor da variável nome no console
console.log(nome);

//Enviado no chat o array de objetos que teremos para trabalhar
// criando um array contendo objetos, onde, a idéia deste array é criar uma lista 
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false
    }
  ];
  
//  Desafio 3 - Criar uma função que percorra a lista de pets e
//listar a seguinte mensagem para cada pet "Nome: nome Do Pet" 
//e também uma mensagem para o tipo para cada pet "Tipo: tipo Do Pet"
//E por fim, retornar uma mensagem contendo a quantidade total de pets cadastrados no nosso sistema

function listarPets(){
    for (let i = 0; i < pets.length; i++) {
        console.log("Nome: " + pets[i].nome + "\n" + "Tipos: " + pets[i].tipo);
    }
    console.log("Temos o total de " + pets.length + " pet(s) registrados(s) no sistemas");
}
// executando a função de listarPets( ) para que ela retorne a execução no console,
// trazendo o nome e o tipo do pet, e, por fim contando a quantidade total de pets cadastrados,
// listarPets( )

// Desafio 4 - Criar uma função que adicione pets na nossa lista de pets
// (adicionar elementos no array de objetos), lembrando, que teremos que fazer isso total

// resolução 
/*
function cadastrarPet(objetoPet){
    pets.push(objetoPet)
    console.log(pets)
}

let novoPet = {
    nome: "Novo Pet",
    tipo: "gato",
    raca: "siames",
    idade: 3,
    genero: "Fêmea",
    vacinado: false
}
cadastrarPet(novoPet)
*/

// Desafio 4.1: criar uma validação para certificar se realmente estamos recebendo um objeto para cadastrar o pet, caso tenha sido 
// informado como parametro um objeto então iremos adicioná-lo, caso contrário, iremos exibir uma mensagem de erro
//"Informe um objeto válido para cadatrar um novo pet"

/*
function cadastrarPet(objetoPet){
    if(typeof objetoPet == "object"){
        pets.put(objetoPet)
        console.log(pets)
    } else {
      console.log ("Informe um objeto válido para cadastrar um novo pet") 
    }    
}

let novoPet = {
    nome: "Novo Pet",
    tipo: "gato",
    raca: "siames",
    idade: 3,
    genero: "Fêmea",
    vacinado: false
}
novoPet = "cachorro"

cadastrarPet(novoPet)
*/

//Desafio 4.2: criar uma função de titulo validaDados que irá validar se o objeto passado como parâmetro possui todas as
// propriedades necessarias, que são: nome, tipo, raca, idade, genero e vacinado (lembrando que devemos validar a
//propriedade vacinado para receber apenas valores booleanos - true or false)

function validaDados(objetoPet){
    return (typeof objetoPet.nome === "string"
    && typeof objetoPet.tipo === "string"
    && typeof objetoPet.raca === "string"
    && typeof objetoPet.idade === "number"
    && typeof objetoPet.vacinado === "boolean")
}

function cadastrarPet(objetoPet){
    if(typeof objetoPet == "object"){
        pets.put(objetoPet)
        console.log(pets)
    } else {
      console.log ("Informe um objeto válido para cadastrar um novo pet") 
    }    
}

let novoPet = {
    nome: "Novo Pet",
    tipo: "gato",
    raca: "siames",
    idade: 3,
    genero: "Fêmea",
    vacinado: false
}
novoPet = "cachorro"

cadastrarPet(novoPet)

//próxima parte 2:14

// Calback

function calcular (numero1, numero2, operação){
    operação(numero1, numero2)
    console.log("A operação foi realizada com sucesso")
}

function soma(numero1, numero2){
    console.log(numero1 + numero2)

} function subtrai(numero1, numero2){
    console.log(numero1 - numero2)

} function multiplica(numero1, numero2){
    console.log(numero1 * numero2)

} function divide(numero1, numero2) {
    console.log(numero1 / numero2)
} 

calcular(10, 20, soma)
calcular(20, 10, subtrai)
calcular(10, 20, multiplica)
calcular(10, 2, divide)

/*
Desafio 05 - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: 
dar banho no pet e tosar o pet
sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
servicosPrestados(pets[0].nome, darBanhoNoPet)
servicosPrestados(pets[0].nome, tosarPet)Deveremos executar um aviso dentro das funcoes callback darBanhoNoPet e tosarPet, como o exemplo abaixo:
  console.log(O servico de tomar banho foi realizado com sucesso no pet + yoshi)
  console.log(O servico de tosa foi realizado com sucesso no pet  + yoshi)Terá que ser criada uma nova propriedade dentro de cada pet chamada servicos que armazene todos servicos realizados
*/







