//...

const Jogador={nome:"Bruno", energia:100, vidas:3, magia:130}
const Jogador2={nome:"Guanabara", energia:100, vidas:3, especial: "100%"}
const Jogador3={...Jogador,...Jogador2}

console.log(Jogador3)

const soma =(v1, v2, v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4]

console.log(soma(...valores))

const objs=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")] //Array

objs2.forEach(element => {
    element.innerHTML="Curso"
})

console.log(objs)
console.log(objs2)