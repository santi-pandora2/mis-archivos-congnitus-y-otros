//palindromo con metodos
//palabra normal

let w2 = ["M","a","c"];
//se invierte lapalabra
let w2b= w2.reverse();
//se junta la palñabra invertida.
let neww = w2b.join(' ')
// si se leen iguales es palindromo
if (w2 === neww) {
    console.log("es palindroma");
   //en casoide que no se lean iguales no es palindromo 
} else {
    console.log("no es palindromo");
    
    
}
