let nome = "Pet Shop NodeJS DH"

// exibindo valor da variavel nome no console
console.log(nome);

// criação de array com alguns itens para que possamos percorrer
let animais = ['Leão', 'Cavalo', 'Cachorro'];

let pessoa = {
    nome: 'Victor',
    idade: 99,

}

//Desafio 1 - Percorrer o array de animais da variável array e listá-los no terminal;

// utilizando for comum para percorrer array de animais

for (let i = 0; i < animais.length; i++) {
    console.log(animais[i]);
}

// utilizando for of para percorrer array de animais, repare que a sintaxe é mais 
// e no fim das contas obtemos o mesmo efeito, portanto, fica a seu critério em de 
// qual do dois formatos irá implementar 

// Outra forma de resolver com o for of;
for(let item of animais){
    console.log(item)
}

//criação de um objeto que possui caracteristicas que pertençam ao mesmo contexto 
//neste caso abaixo, estamos criando uma variavel pessoa com as propriedades nome e idade
    pessoa = {
    nome: 'Victor',
    idade: 99
}

// Desafio 2 - Percorrer o objeto da variavel pessoa, e demonstrando como obtemos 
// e, respectivamente o valor daquela propriedade em questão

for (let item in pessoa){
    console.log("Propriedades: " + item + " valor da propriedade " + pessoa[item])
}


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

listarPets()

// Desafio 4 - Criar uma função que adicione pets na nossa lista de pets
// (adicionar elementos no array de objetos), lembrando, que teremos que fazer isso total