let carro = 
{
    marca: "jeep",
    modelo: "Renegade",
    ano: 2024

}


//chamando um objeto
console.log(carro.marca);
console.log(carro.modelo);

//Modificar
carro.modelo = "Campass";

//Adicionar
carro["cor"] = "Azul"

console.log(carro.ano);
console.log(carro.cor);
console.log(carro.modelo);