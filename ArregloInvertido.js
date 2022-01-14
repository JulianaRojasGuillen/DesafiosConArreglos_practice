/*Escribe una función que invierta los valores de un arreglo y los devuelva.*/

function reverse(arr) {
    for(i=0;i<arr.length;i++){
        arr.splice(arr.length-i,0,arr[0]);
        arr.shift();
    }
    return arr;
}
   
let result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]