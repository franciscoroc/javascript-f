const objs=document.getElementsByTagName("div")

for(o of objs){
    console.log(o.innerHTML="Curso")
}

for(o in objs){
    console.log(objs[o].innerHTML)
}


let num=[10,20,30,40,50]

for(n in num){
    console.log(num[n])
}

for(let i=2;i<num.length; i++){
    console.log(num[i])
}