let num=11

if (num==10) {
    console.log("Numeral igual a 10")
}else if(num>10){
    console.log("Numeral maior que 10")
    if(num > 50){
        console.log("Numeral maior que 50")
    }else{
        console.log("mas menor que 50")
    }
}else {
    console.log("Numeral menor que 10")
}

let energia=100
let clima="sol"

if(energia > 99 && clima=="sol"){
    console.log("Vou ir a praia")
}else{
    console.log("Vou ir ao cinema")
}

console.log("Fim do Programa")