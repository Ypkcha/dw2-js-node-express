//Métodos de manipulação de vetores
let vetor = ['Laranja', 'Maça', 'Banana'];
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

//Colocar em um indice especifico
vetor [3] = 'Morango';
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

//Push - Insere um elemento no final do vetor.
vetor.push('Abacaxi');
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

//Sobscrever um elemento em um indice
vetor[0] = 'Pera'
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

//Unshift - Adicionar elementos no Inicio do vetor
vetor.unshift('Laranja');
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

//Length - Retorna o número de elementos no vetor
let numbers = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p>Nosso novo vetor é o: ${numbers}</p>`);
document.write(`<p>O número de elementos nesse vetor é: ${numbers.length}</p>`);

//Sort - Ordena o vetor. Lembrar do ()
document.write(`<p>O primeiro elemento do vetor é: ${numbers[0]}</p>`);

let numbersOrdenado = numbers.sort();
document.write(`<p>O vetor ordenado: ${numbersOrdenado}</p>`);

document.write(`<p>Nossa lista de furtas ordenadas é: ${vetor.sort()}</p>`);

//Ordenando um vetor numérico em ordem crescente
document.write(`<p>${numbers.sort((a, b) => a - b)}</p>`);

//Ordenando um vetor numérico em ordem crescente
document.write(`<p>${numbers.sort((a, b) => b - a)}</p>`);
