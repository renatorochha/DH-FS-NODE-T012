// Exercicio 02: transformar as funções em Arrow functions e for para for it.

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

// Aula 02
const listarPets = (pets) => {
  pets.forEach((pet) => {
      console.log("Nome: " + pet.nome + "\n" + "Tipos: " + pet.tipo);
  });
  console.log("Temos o total de " + pets.length + " pet(s) registrados(s) no sistemas");
}
// executando a função de listarPets( ) para que ela retorne a execução no console,
// trazendo o nome e o tipo do pet, e, por fim contando a quantidade total de pets cadastrados,

listarPets(pets)

//Aula03
const validaDados = (objetoPet) => {
  return (typeof objetoPet.nome === "string"
  && typeof objetoPet.tipo === "string"
  && typeof objetoPet.raca === "string"
  && typeof objetoPet.idade === "number"
  && typeof objetoPet.vacinado === "boolean")
}

const cadastrarPet = (objetoPet) => {
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

//cadastrarPet(novoPet)

//Aula 04

const servicosPrestados = (pet, servicosRealizados) => {
    servicosRealizados(pet);
}
  
const darBanhoNoPet = (pet) => {
    pet.servicos.push("banho");
    console.log("O pet " + pet.nome + " tomou banho");
}

const tosarPet = (pet) => {
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

// 1ª forma de cadastrar: utilizando Spread Operator
const cadastrarPetsSpreadOperator = (pets, json) => {
  let arrayPetsjson = JSON.parse(json);
  pets.push(...arrayPetsjson)

  return pets
}  
// 2ª forma de cadastrar: utilizando o FOr
const cadastrarPetsSpreadOperator = (pets, json) => {
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
const filtrarPetPorNome = (Lista, nomePet) => {
  let petsFiltrados = Lista.filter((pet)=> {
    return pet.nome == nomePet
  });
 
  if(petsFiltrados.length > 0){
    return petsFiltrados
  } else {
    return "Nenhum pet foi encontrado com o nome "+ nomePet
  }
}

//console.log(filtrarPetPorNome(pets, "x"));

/*
Desafio: temos 1000 pets e nossa empresa pretende criar uma campanha de vacinação, porém, precisamos atingir apenas pets
que ainda não foram vacinados, para isso teremos que efetuar uma contagem de quantos pets já estão vacinados e quantos pets ainda 
precisam ser vacinados.

Por exemplo: Pense que temos 700 animais vacinados e 300 não vacinados, logo, o foco da nossa capanha seria atingir apenas os 300
animais que ainda não foram vacinados, mas fique tranquilo. Por enquanto, iremos apenas focar na contagem de vacinados e não
vacinados.
*/ 