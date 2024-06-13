// function aluno(nome,nota){
//     this.nome=nome
//     this.nota=nota

//     this.dados_anonimo=function(){
//         setTimeout(function(){ escopo bloqueia 
//             console.log(this.nome) não funciona / undefined
//             console.log(this.nota) não funciona / undefined
//         }, 3000) 
//     }
// }

// const al1=new aluno("Bruno", 100)
// al1.dados_anonimo()


function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    this.dados_arrow=function(){
        setTimeout(()=>{ // arrow function usa contexto pai, não criando separação
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

const al1=new aluno("Bruno", 100)
al1.dados_arrow()