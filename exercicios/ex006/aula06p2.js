// OBJETOS
let v1 ={nome:"Bruno"};
let v2 ={nome:"Bruno"};

console.log(v1==v2) //false
console.log(v1===v2) //false
//posição de alojamento de memória diferentes

v2 =v1;

console.log(v1==v2, v1===v2) // true / v2 chama o mesmo alojamento de memória do v1

