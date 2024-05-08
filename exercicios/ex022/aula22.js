function soma(n1, n2){
    console.log(n1+n2)
}

soma(10, 5)

function soma(n1=0, n2=0){
    console.log(n1+n2)
}

soma(10)


const VALOR_PADRAO=0

function soma1(n3=VALOR_PADRAO, n4=VALOR_PADRAO){
    let res
    res=n3+n4
    return res
}

let resultado_soma=soma1(5)
console.log(resultado_soma)

function add(v){
    return valor+v
}

let valor=0
console.log(valor)

valor=add(10)
console.log(valor)

valor=add(5)
console.log(valor)