/*Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. 
Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. Los números 
de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, si el cuarto valor es 2 
y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.*/

function Fibonacci(n){
    let arr=[0,1];
    for(let i=0;(i+3)<=n;i++){
    arr.push(arr[i]+arr[i+1]);
    }
    console.log(arr);
    return arr;
}

Fibonacci(10);