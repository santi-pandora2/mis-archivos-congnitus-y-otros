
let numbers = [10,20,30,"40",50,60];
//con el find index sacas la posiccion del elemento tipo texto del arreglo original

const falsenumbers = numbers.findIndex( n => typeof n != "number" );
//una vez vbuscado el indicedonde esta el dato tipo texto se imprime para revisarlo

console.log(falsenumbers);

//con el splice se elimina el elemento apartir de su posicion incial cuya posicion fue revelada por el find index
numbers.splice(falsenumbers,1);
//se imprime los numeros sin el texto que fue filtrado y eliminado anteriormenteanteriormente
console.log(numbers);

