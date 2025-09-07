//Decalarar uma função

function calcular_area(raio)
{
    const pi = 3.14159;
    return pi *raio *raio;
}

let raio = 5;
let area = calcular_area(raio);
console.log(`A área do círculo é de ${area} sendo que seu raio é de ${raio}` );