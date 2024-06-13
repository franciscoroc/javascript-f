function* cores(){
    yield "Vermelho"
    yield "Verde"
    yield "Azul"
}

const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)




function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next("Bruno").value)
console.log(itp.next("Basquete").value)




function* contator(){
    let i=0
    while (true){
        yield i++
    }
}

const itc1=contator()
for(let i=0; i<10; i++){
    console.log(itc1.next().value)
}

function* contator1(){
    let i=0
    while (true){
        yield i++
        if(i>5)
            break
    }
}

const itc2=contator1()
for(let c of itc2){
    console.log(c)
}