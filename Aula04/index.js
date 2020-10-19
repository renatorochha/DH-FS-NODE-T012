/*
let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true,
      servicos: []
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false,
      servicos: []
    }
  ];


Data 30/09/2020  
Desafio 05 - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: 
dar banho no pet e tosar o pet
sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
servicosPrestados(pets[0].nome, darBanhoNoPet)
servicosPrestados(pets[0].nome, tosarPet)Deveremos executar um aviso dentro das funcoes callback darBanhoNoPet e tosarPet, como o exemplo abaixo:
  console.log(O servico de tomar banho foi realizado com sucesso no pet + yoshi)
  console.log(O servico de tosa foi realizado com sucesso no pet  + yoshi)Terá que ser criada uma nova propriedade dentro de cada pet chamada servicos que armazene todos servicos realizados
*/

// Terá que ser criada uma nova propriedade dentro de cada pet chamada serviços que armazene todos serv realizados

function servicosPrestados(pet, servicosRealizados){
    servicosRealizados(pet);
}
  
function darBanhoNoPet(pet){
    pet.servicos.push("banho");
    console.log("O pet " + pet.nome + " tomou banho");
}

function tosarPet(pet){
    pet.servicos.push("tosa");
    console.log("O pet " + pet.nome + " foi tosado");
}

//servicosPrestados(pets[0], darBanhoNoPet);
//servicosPrestados(pets[0], tosarPet)
//console.log(pets)

/*
Data 05/09/2020
Desafio 1 : Identificar qual a data que o serviço foi realizado. Resposta esta em Desafio01.js

Desafio 2: criar uma funcao que adicione todos esses pets da lista que esta contida na constante json dentro da nossa lista de pets
que é a variavel pets. Lembrando que: nao precisa ter validacao de dados ta galera, por qual motivo ? No json nao temos as 
propriedades vacinado, servicos.
dica : utilizar JSON.parse na sua string json para transformá-la em um array de objetos válidos.

*/

const json = require("./json");

let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true,
      servicos: []
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false,
      servicos: []
    }
  ];

function cadastrarPetsSpreadOperator(pets, json){
  let arrayPetsjson = JSON.parse(json);
  pets.push(...arrayPetsjson)

  return pets
}  

function cadastrarPetsSpreadOperator(pets, json){
  let arrayPetsjson = JSON.parse(json)
  
  for (let index = 0; index < arrayPetsjson.length; index++) {
    pets.push(arrayPetsjson[index])
  }

  return pets
}
/*
console.log(cadastrarPetsSpreadOperator(pets, json));
console.log(cadastrarPetsSpreadOperator(pets, json));
*/

//CRUD = Create, Read (listar), Update, Delete
/*
Desafio 3 - Crie uma função filtrarPetPorNome, que quando receber um parâmetro que será uma string irá filtrar um pet por nome 
e retorná-lo e senão irá retornar que não existe o pet na lista
*/
function filtrarPetPorNome(Lista, nomePet){
  let petsFiltrados = Lista.filter((pet)=> {
    return pet.nome == nomePet
  });

  if(petsFiltrados.length > 0){
    return petsFiltrados
  } else {
    return "Nenhum pet foi encontrado com o nome "+ nomePet
  }
}

console.log(filtrarPetPorNome(pets, "x"));







