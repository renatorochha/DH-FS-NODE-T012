//Data 05/10/2020
//Desafio 1 : Identificar qual a data que o serviço foi realizado.


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


function servicosPrestados(pet, servicosRealizados){
    servicosRealizados(pet);
}
  
function darBanhoNoPet(pet){
    let data = new Date();
    data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    pet.servicos.push("banho na data "+ data);
    console.log("O pet " + pet.nome + " tomou banho");
}

function tosarPet(pet){
    let data = new Date();
    data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    pet.servicos.push("tosa na data "+ data);
    console.log("O pet " + pet.nome + " foi tosado");
}

servicosPrestados(pets[0], darBanhoNoPet);
servicosPrestados(pets[0], tosarPet)
console.log(pets)




